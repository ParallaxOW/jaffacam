const ComputerVisionClient = require('azure-cognitiveservices-computervision');
const config = require("./config.json");
const { createReadStream } = require("fs");
 
const { CognitiveServicesCredentials } = require('ms-rest-azure');
 
// Creating the Cognitive Services credentials
// This requires a key corresponding to the service being used (i.e. text-analytics, etc)

module.exports = {
    analyzeImage: function(fileName){
        
        var credentials = new CognitiveServicesCredentials(config.comp_vision_key)
        
        let client = new ComputerVisionClient(credentials, config.comp_vision_endpoint);
        let fileStream = createReadStream(fileName);
        
        //return the Promise that is resolved in the caller.
        return client.analyzeImageInStreamWithHttpOperationResponse(fileStream, {
        visualFeatures: ['Tags', 'Description']
        });
    }
}