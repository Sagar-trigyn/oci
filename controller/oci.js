const oci = require('oci-sdk');

const fs = require('fs');

module.exports = async function getObjectFromBucket() {
    const bucketName = 'dev-certqr-storage';
    const objectName = '123_537_1476442434_1476442449991';
    const provider = new oci.configFileProvider();
    const identityClient = new oci.identity.IdentityClient({
        authenticationDetailsProvider: provider
    });
    const objectStorageClient = new oci.objectStorage.ObjectStorageClient({
        authenticationDetailsProvider: provider
    });


    const namespace = await identityClient.getTenancy().then(response => response.body.name);

    const getObjParams = {
        namespaceName: "bmzbbujw9kal",
        bucketName: "ntp-content-preprod",
        objectName: "123_537_1476442434_1476442449991.png"
    };

    const getObjectStream = await objectStorageClient.getObject(getObjParams, {});
    const outputStream = fs.createWriteStream(`./${objectName}`);
    getObjectStream.pipe(outputStream);

    console.log(`Successfully retrieved object ${objectName} from bucket ${bucketName}`);
}
