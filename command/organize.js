let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archive: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'ios', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]

}
let curOpen = "C:\\Users\\Lenovo\\Desktop\\random";

function organize(src) {
    let files = fs.readdirSync(src);
    let realFiles = files.toString();
    //   console.log(realFiles);
    //   console.log(typeof realFiles);
    //   let extensions=realFiles.split("pdf");
    //   console.log(extensions);
    for (let i = 0; i < files.length; i++) {
        let flag=0;
        let toCheck = files[i].split('.').splice(1);

        for (let j = 0; j < types.media.length; j++) {
            if (toCheck == types.media[j]) {
                let accuratePath = path.join(src, "Media")
                let fexist = fs.existsSync(accuratePath)
                if (fexist) {

                }
                else {
                    console.log("Media files organised");
                    fs.mkdirSync(accuratePath);

                }


                accuratePath = path.join(accuratePath, files[i]);
                src1 = path.join(src, files[i]);
                fs.copyFileSync(src1, accuratePath);
                
                flag=1;

            }

        }
        for (let j = 0; j < types.archive.length; j++) {
            if (toCheck == types.archive[j]) {
                let accuratePath = path.join(src, "Archive")
                let fexist = fs.existsSync(accuratePath)
                if (fexist) {

                }
                else {
        
                    fs.mkdirSync(accuratePath);
                    console.log("Archive files organised");

                }


                accuratePath = path.join(accuratePath, files[i]);
                src1 = path.join(src, files[i]);
                fs.copyFileSync(src1, accuratePath);
                
                flag=1;

            }

        }
        for (let j = 0; j < types.documents.length; j++) {
            if (toCheck == types.documents[j]) {
                let accuratePath = path.join(src, "Documents")
                let fexist = fs.existsSync(accuratePath)
                if (fexist) {

                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Documents files organised");

                }


                accuratePath = path.join(accuratePath, files[i]);
                src1 = path.join(src, files[i]);
                fs.copyFileSync(src1, accuratePath);
            
                flag=1;

            }

        }
        for (let j = 0; j < types.app.length; j++) {
            if (toCheck == types.app[j]) {
                let accuratePath = path.join(src, "App")
                let fexist = fs.existsSync(accuratePath)
                if (fexist) {

                }
                else {
                    
                    fs.mkdirSync(accuratePath);
                    console.log("APP files organised");

                }


                accuratePath = path.join(accuratePath, files[i]);
                src1 = path.join(src, files[i]);
                fs.copyFileSync(src1, accuratePath);
                
                flag=1;

            }
        }
        for (let j = 0; j < files.length; j++) {
            if (flag==0) {
                let accuratePath = path.join(src, "Others")
                let fexist = fs.existsSync(accuratePath)
                if (fexist) {

                }
                else {
                    fs.mkdirSync(accuratePath);
                    console.log("Others files organised");

                }


                accuratePath = path.join(accuratePath, files[i]);
                src1 = path.join(src, files[i]);
                fs.copyFileSync(src1, accuratePath);
               

            }
        }
    }


}
module.exports={
ofnx:organize    
}