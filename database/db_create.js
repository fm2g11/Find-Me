var Sample = require('./models/sample');
//var fs = require('fs');
//var obj = JSON.parse(fs.readFileSync('db_dump', 'utf8'));
var sample = [
    {
        title : 'Goal Manager', 
        description : 'Goal Manager lets you add tasks and mark the progress for each of them'
    }
];

module.exports = {
    createDB : function (req, res) {
        Sample.create(sample, function(err) {
            if (err)
                res.send(err);
            else
                res.send("DB created");
        });
    },

    dropDB : function(){
        Sample.remove({

        }, function(err){
        });
    }
};