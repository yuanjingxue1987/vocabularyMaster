const fs = require('fs')
const path = require('path')
const paths = require('../buildConfig/paths')

const pathProd = '/mnt/Http/main/'

const deepCopyFiles = (pathFrom, pathTo) => {
    fs.readdir(
        pathFrom, 
        {
            withFileTypes: true
        },
        (err, arrPaths) => {
            arrPaths.forEach(p => {
                if(p.isFile()) {
                    //if the dirent is a file, copy it to the destination
                    fs.copyFile(
                        path.join(pathFrom, p.name),
                        path.join(pathTo, p.name),
                        (err) => console.log(err)
                    )
                }else{
                    //if the dirent is a folder, create the same foldername in destination
                    fs.mkdir(
                        path.join(pathTo, p.name),
                        {recursive: true},
                        () => {
                            deepCopyFiles(
                                path.join(pathFrom, p.name),
                                path.join(pathTo, p.name)
                            )
                        }
                    )
                }
            })
        }
    )
}

deepCopyFiles(paths.distSrc, pathProd)
