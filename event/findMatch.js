// ====================================================================================================
//
// Cloud Code for findMatch, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm
//
// ====================================================================================================

var matchshortCode = Spark.getData().match_shortcode;

    if(matchshortCode === "rankedMatch")
    {
        var matchRequest = new SparkRequests.MatchmakingRequest();

        matchRequest.matchShortCode = matchshortCode;
        matchRequest.skill = Spark.getPlayer().getScriptData("baseLevel");

        Spark.getLog().debug("matchshortCode: "+ matchshortCode);
        Spark.getLog().debug("skill: "+ Spark.getPlayer().getScriptData("baseLevel"));

        //From Local

        matchRequest.Send();
    }
