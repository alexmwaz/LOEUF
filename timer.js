// timer

var EggType = prompt( How do you wish to cook your egg? ('h' for HARDBOILED and 's' for SOFTBOILED));

var Egg
{
    m_type: EggType;
    
    if( m_type === "s" )
        m_time: 3*60;
    else if( m_type === "h" )
        m_time: 5*60;
    else
        m_time: 0;
};
<script src="/js/countdown.js"></script>

var EggTime = function()
{
    clock_t startTime = clock(); //Start timer
    var secondsPassed;
    var secondsToDelay = m_time;
    var timeToPrint = 0;
    console.log("You must wait a total of: " + secondsToDelay/60 + " minutes!!!!!");
    bool flag = true;
    while(flag)
    {
        secondsPassed = (clock() - startTime) / CLOCKS_PER_SEC;
        
        if(secondsPassed >= secondsToDelay)
        {
            console.log("0" + secondsToDelay/60 + ":00 minutes have passed. Your time is up!!");
            flag = false;
        }
        else if( secondsPassed != timeToPrint )
        {
            var minutes = secondsPassed/60;
            var seconds = secondsPassed - minutes*60;
            
            if( secondsPassed > 9 && secondsPassed < 60 )
                console.log( "00:" +secondsPassed );
            else if( minutes > 0 && seconds < 10 )
                console.log("0" + minutes +":0" + seconds);
            else if( minutes > 0 && seconds >= 10 )
                console.log("0" + minutes + ":" + seconds);
            else
                console.log("00:0" + secondsPassed);
            timeToPrint++;
        }
    }
};
