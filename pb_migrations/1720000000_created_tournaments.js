migrate(
  (app) => {
    const collection = new Collection({
      id: "pbcapytrn1",
      name: "tournaments",
      type: "base",
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        {
          id: "jsonstate",
          name: "state",
          type: "json",
          required: true,
          maxSize: 0,
        },
      ],
      indexes: [],
    });

    return app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("pbcapytrn1");
    return app.delete(collection);
  },
);
