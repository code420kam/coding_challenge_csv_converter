import { promises as fs } from 'fs'
import path from 'path'
import 'dotenv/config'

export function test(response, saveas) {
    let rowData
    if (response.data !== undefined) {
        rowData = response.data.results.artistmatches.artist.map((match) => {
            return {
                name: match.name,
                mbid: match.mbid,
                url: match.url,
                image_small: match.image[0],
                /*
                Here I put the whole image array, because you write that the CSV file should include
                image_small and image. But on my response the image array hat a few different elements like
                small, medium, large, extralarge, mega and I don't know which of those you meant
                */
                image: match.image,
            }
        })
    } else {
        rowData = response.artist
    }

    //function to convert response to a valid csv data
    function convertToCSV(arr) {

        //building the header of csv data
        let header = []
        header.push(Object.keys(arr[0]).concat('\n').join(';'))

        //building the body of csv data
        const body = Object.values(arr)
        const csvBody = body.map((elem) => {
            //destructuring object values
            const { name, mbid, url, image_small, image } = elem

            let body = `${name};${mbid};${url};${Object.values(image_small)[0]};${JSON.stringify(image)}\n`
            return body
        })
        return header + csvBody.join('')
    }

    //building path to save file & folder
    (async function () {
        const filePath = await path.resolve(`test/${saveas}.csv`)
        const folderPath = await path.resolve(`./test`)

        // check if folder path accessable; if not build folder and write file
        try {
            await fs.access(folderPath)
            fs.writeFile(filePath, convertToCSV(rowData))
        } catch (error) {
            fs.mkdir(folderPath)
            fs.writeFile(filePath, convertToCSV(rowData))
        }
    })()

    return convertToCSV(rowData)
}
