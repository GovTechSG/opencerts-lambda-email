const uuidV4Regex = new RegExp(
  /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
);

const thatIsUploadResponse = {
  id: expect.stringMatching(uuidV4Regex),
  key: expect.any(String),
  type: expect.stringMatching("OPEN-ATTESTATION-TYPE-1"),
  ttl: expect.any(Number)
};

const thatIsRetrievedDocument = {
  document: expect.objectContaining({
    cipherText: expect.any(String),
    iv: expect.any(String),
    tag: expect.any(String)
  })
};

const thatIsRetrievedDocumentWithTtl = {
  document: expect.objectContaining({
    cipherText: expect.any(String),
    iv: expect.any(String),
    tag: expect.any(String),
    ttl: expect.any(Number)
  })
};

const thatIsAQueueNumber = {
  key: expect.any(String),
  id: expect.stringMatching(uuidV4Regex)
};

module.exports = {
  thatIsRetrievedDocument,
  thatIsRetrievedDocumentWithTtl,
  thatIsUploadResponse,
  thatIsAQueueNumber
};
