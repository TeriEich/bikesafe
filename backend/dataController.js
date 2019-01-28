const Event = require('./data');
module.exports = {

//seed database
seedEvents: (req, res) => {
  // get from files
  const events = [ {} ]

  //use the Event model to insert/save
  for (event of events) {
    let newEvent = new Event(event);
    newEvent.save();
  }

  //confirm seed!
  res.send('Databse seeded!');
}onst events =




}