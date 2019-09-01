const setTimestamp = (schema) => {    //add to schema two field, time: create, update
    schema.add({
      createdAt: Date,
      updatedAt: Date
    });
  
    schema.pre('save', function(next) {
      const now = Date.now();
  
      this.updatedAt = now;
  
      if (!this.createdAt) {
        this.createdAt = now
      }
  
      next()
    });
  };
  
  module.exports = setTimestamp;