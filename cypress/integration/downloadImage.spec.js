/// <reference types="cypress-downloadfile"/>

describe('Download S3 Image ', () => {    //describe scenario and callback function
    it('Download Image Interaction', () => { //callback function
        cy.downloadFile('https://losgurises.s3.amazonaws.com/57a378c88099a6366e5bff1b9d5f125d.jpg','mydownloads','example.jpg')
    })
  })
  



