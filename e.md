{imageLink && (
<Container className="text-center">
<Alert
variant="info"
style={{
                      maxWidth: "310px",
                    }} >
<Alert.Link
href="https://react-bootstrap.netlify.app/docs/components/alerts"
rel="noopener noreferrer"
target="\_blank" >
{imageLink}
</Alert.Link>
</Alert>
<Container>
<Button variant="secondary" style={{
                      fontSize:".8rem"
                    }}>Copy Link</Button>
</Container>
</Container>
)}

              <Container className="text-center">
                {droppedImage && (
                  <Image
                    src={URL.createObjectURL(selectedFile)}
                    style={{
                      maxHeight: "84px",
                    }}
                  />
                )}
                {(droppedImage || selectedFile) && (
                  <p>{(droppedImage || selectedFile)?.name}</p>
                )}
                {imageSize && <p>Image size: {imageSize} KB</p>}
              </Container>
