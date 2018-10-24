function calculateKD(){
    var mDuo = $('#matchesDuo').val();
    var mSolo = $('#matchesSolo').val();
    var mSquad = $('#matchesSquad').val();

    var wSolo=$('#wSolo').val();
    var wDuo = $('#wDuo').val();
    var wSquad = $('#wSquad').val();
    var wins = parseInt(wSolo)+ parseInt(wDuo)+ parseInt(wSquad);
    var matches=  parseInt(mSolo)+ parseInt(mDuo)+ parseInt(mSquad);

    var kd = wins /matches;
    kd = kd *100;

    $('#test').html("Winrate:   "+Math.round(kd)+ "%");
}



          