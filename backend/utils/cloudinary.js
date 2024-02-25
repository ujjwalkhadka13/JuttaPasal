import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: 'djcggxphx', 
  api_key: '238281575665552', 
  api_secret: 'uJjQNePwTx4rhHzW_moITaeCpSA' 
});

const cloudinaryUpload = async (localFilePath) => {
    try{
        const response = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        fs.unlinkSync(localFilePath)
        return response;
    }catch{
        console.log(error)
        fs.unlinkSync(localFilePath)
        return null
    }
}
export default cloudinaryUpload;