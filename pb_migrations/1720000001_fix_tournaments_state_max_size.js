migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId("pbcapytrn1");
    const field = collection.fields.getByName("state");
    field.maxSize = 2000000;
    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("pbcapytrn1");
    const field = collection.fields.getByName("state");
    field.maxSize = 0;
    return app.save(collection);
  },
);
