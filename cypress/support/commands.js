import 'cypress-file-upload';

Cypress.Commands.add('upload_file', (fileName, fileType = ' ', selector) => {
    return cy.get(selector).then((subject) => {
      
      cy.fixture(fileName, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, {
            type: fileType
          })
          
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el.files = dataTransfer.files
          // debugger
        })
    })
  })