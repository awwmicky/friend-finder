$(() => {
const $surveyPgBtn = $('.survey-pg-btn');
$surveyPgBtn.on('click', _ => {
    window.location = './survey';
});
/*  */
const $surveyFrom = $('.survey-from');
const $nameInput = $('.name-input');
const $radioAllBtns = $('input[type=radio]');
const $submitBtn = $('.submit-btn');
const $answerMatchResults = $('.answer-match-results');

$surveyFrom.on('submit', e => {
    e.preventDefault();

    const name = $nameInput.val();
    $nameInput.val('');

    let scoreList = [];
    for (let i = 0; i < $radioAllBtns.length; i++) {
        const radio = $radioAllBtns[i];
        if (radio.checked) {
            scoreList.push(radio.value);
            // console.log(radio.value);
            radio.checked = false;
        }

    }

    const newUser = {
        'name' : name,
        'score' : scoreList
    };
    console.log(newUser);

    $.ajax({
        type: 'POST',
        url: '../api/friends',
        data: newUser
    })
    .then( res => {
        console.log(res);
        $answerMatchResults.empty();
        $answerMatchResults.append(
            `<br>
            <div id="content">
                <h1>MATCH</h1>
                <h3>${newUser.name}</h3>
                <p>=== is closes to ===</p>
                <h3>${res.name}</h3>
            </div>
            <br>`
        );
    })
    .catch( err => {
        console.log(err);
    });
});


viewAllFriends = () => {
    $.ajax({
        type: 'GET',
        url: '../api/friends'
    })
    .then( res => {
        console.log(res);
    })
    .catch( err => {
        console.log(err);
    });
};
viewAllFriends();
/*  */
});

/* 
- Q can you beat the joker?
    - using fists 1---5
    - using kicks 1---5
    - using headbutts 1---5
^ range
- 10 < x
    - robin
- 10 > x
    - batman

= Option 1 =
^ survey
- [5,5,3] = 13
- [1,1,2] = 4

= Option 2 =
- [5,5,3]
- [1,1,2]
- [4,4,1] (subtotal)
- 9 (total)
*/