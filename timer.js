// timer

var EggType = prompt( How do you wish to cook your egg? ('h' for HARDBOILED and 's' for SOFTBOILED));

//creates egg variable
var Egg = 
{
    m_type: EggType;
    
    if( m_type === "s" )
        m_timeVar: 120000; //2 minutes
    else if( m_type === "h" )
        m_timeVar: 480000; //8 minutes
    else
        m_timeVar: 0; //cut out
};

var start=Date.now(),r=document.getElementById('r');
(function f()
{
    var diff = Date.now() - start, ns = ((( Egg.m_timeVar- diff) / 1000) >> 0), m = (ns / 60) >> 0, s = ns - m*60;
    r.textContent="Registration closes in "+m+':'+((''+s).length>1?'':'0')+s+' minutes';
 if(diff>(Egg.m_timeVar)){start=Date.now()}
 setTimeout(f,1000);
})();
