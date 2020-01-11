const express = require('express');
const router = express.Router();
const friendsData = require('../data/database.js');
/*  */
// console.log(friendsData);

router.get('/friends', (req, res) => {
    console.log(' ✓ view all ✓ ');
    res.send(friendsData);
});

router.post('/friends', (req, res) => {
    // console.log(req.body);
    let user = req.body;

    user.score.forEach( (num, idx) => {
        user.score[idx] = Number(num);
    });
    console.log(user);

    let bestMatch = 0;
    let minimumDiff = 50;

    for (let i = 0; i < friendsData.length; i++) {
        let totalDiff = 0;
        
        for (let a = 0; a < friendsData[i].score.length; a++) {
            let difference = Math.abs(
                user.score[a] - friendsData[i].score[a]
            );
            totalDiff += difference;
        }

        if (totalDiff < minimumDiff) {
            bestMatch = i;
            minimumDiff = totalDiff;
        }
    }

    friendsData.push(user);
    res.send(friendsData[bestMatch]);
});

/*  */
module.exports = router;
