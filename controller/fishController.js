// fish GET
app.get("/fish", function(req, res) {
      Fish.find(function(err, fishes) {
      console.log(fishes);
      if (err) res.send(err);
      res.send(fishes)
    });
  });