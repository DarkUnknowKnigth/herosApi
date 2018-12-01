Hero = require("../model/hero");
var server = "http://192.168.170.108:3000/v1/image/"

function all(req, res) {
    Hero.find({}).exec(function(err, heros) {
        if (!err) {
            if (heros) {
                heros.forEach(hero => {
                    hero.url = server + hero.url;
                });
                res.send(heros);

            } else {
                res.send({ 'error': "Don't have heros!" });
            }
        } else {
            res.send({ 'error': err });
        }
    });
}
module.exports = {
    all
};