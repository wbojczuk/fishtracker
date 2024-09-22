export default function getFishData():fishType[]{
    let fishData: fishType[] = []!
    if(!(localStorage.getItem("fishData") == null)){
        fishData = JSON.parse(localStorage.getItem("fishData")!)
    }else{
        fishData = [
            
            {
                name: "Largemouth Bass",
                isCaught: false,
                imgSrc: "./img/fish/lb.png",
                id: 0
            },
            {
                name: "Altamaha Bass",
                isCaught: false,
                imgSrc: "./img/fish/alt.png",
                id: 1
            },
            {
                name: "Bartram's Bass",
                isCaught: false,
                imgSrc: "./img/fish/bart.png",
                id: 2
            },
            {
                name: "Chattahoochee Bass",
                isCaught: false,
                imgSrc: "./img/fish/chat.png",
                id: 3
            },
            {
                name: "Redeye Bass",
                isCaught: false,
                imgSrc: "./img/fish/redeye.png",
                id: 4
            },
            {
                name: "Smallmouth Bass",
                isCaught: false,
                imgSrc: "./img/fish/small.png",
                id: 5
            },
            {
                name: "Spotted Bass",
                isCaught: false,
                imgSrc: "./img/fish/spotted.png",
                id: 6
            },
            {
                name: "Alabama Bass",
                isCaught: false,
                imgSrc: "./img/fish/alabama.png",
                id: 7
            },
            {
                name: "Suwannee Bass",
                isCaught: false,
                imgSrc: "./img/fish/suw.png",
                id: 8
            },
            {
                name: "Tallapoosa Bass",
                isCaught: false,
                imgSrc: "./img/fish/tal.png",
                id: 9
            },
            {
                name: "Shoal Bass",
                isCaught: false,
                imgSrc: "./img/fish/shoal.png",
                id: 10
            },
            {
                name: "White Bass",
                isCaught: false,
                imgSrc: "./img/fish/wb.png",
                id: 12
            },
            {
                name: "Striped Bass",
                isCaught: false,
                imgSrc: "./img/fish/striped.png",
                id: 13
            },
            {
                name: "Hybrid Bass",
                isCaught: false,
                imgSrc: "./img/fish/hybrid.png",
                id: 14
            },
            {
                name: "Chain Pickerel",
                isCaught: false,
                imgSrc: "./img/fish/chain.png",
                id: 15
            },
            {
                name: "Brown Bullhead",
                isCaught: false,
                imgSrc: "./img/fish/bbull.png",
                id: 16
            },
            {
                name: "Yellow Bullhead",
                isCaught: false,
                imgSrc: "./img/fish/ybull.png",
                id: 17
            },
            {
                name: "Flathead Catfish",
                isCaught: false,
                imgSrc: "./img/fish/flat.png",
                id: 18
            },
            {
                name: "Channel Catfish",
                isCaught: false,
                imgSrc: "./img/fish/channel.png",
                id: 19
            },
            {
                name: "Redfin Pickerel",
                isCaught: false,
                imgSrc: "./img/fish/redfin.png",
                id: 20
            },
            {
                name: "White Catfish",
                isCaught: false,
                imgSrc: "./img/fish/wc.png",
                id: 21
            },
            {
                name: "Blue Catfish",
                isCaught: false,
                imgSrc: "./img/fish/blue.png",
                id: 22
            },
            {
                name: "White Crappie",
                isCaught: false,
                imgSrc: "./img/fish/wcrap.png",
                id: 23
            },
            {
                name: "Black Crappie",
                isCaught: false,
                imgSrc: "./img/fish/bcrap.png",
                id: 24
            },
            {
                name: "Flier",
                isCaught: false,
                imgSrc: "./img/fish/flier.png",
                id: 25
            },
            {
                name: "Bluegill",
                isCaught: true,
                imgSrc: "./img/fish/bluegill.png",
                id: 26
            },
            {
                name: "Longear Sunfish",
                isCaught: false,
                imgSrc: "./img/fish/longear.png",
                id: 27
            },
            {
                name: "Redbreast Sunfish",
                isCaught: false,
                imgSrc: "./img/fish/redbreast.png",
                id: 28
            },
            {
                name: "Readear Sunfish",
                isCaught: true,
                imgSrc: "./img/fish/redear.png",
                id: 29
            },
            {
                name: "Warmouth",
                isCaught: false,
                imgSrc: "./img/fish/war.png",
                id: 30
            },
            {
                name: "Green Sunfish",
                isCaught: false,
                imgSrc: "./img/fish/green.png",
                id: 31
            },
            {
                name: "Spotted Sunfish",
                isCaught: false,
                imgSrc: "./img/fish/spottedsun.png",
                id: 32
            },
            {
                name: "American Shad",
                isCaught: false,
                imgSrc: "./img/fish/as.png",
                id: 33
            },
            {
                name: "Hickory Shad",
                isCaught: false,
                imgSrc: "./img/fish/hs.png",
                id: 34
            },
            {
                name: "Striped Mullet",
                isCaught: false,
                imgSrc: "./img/fish/mull.png",
                id: 35
            },
            {
                name: "Longnose Gar",
                isCaught: false,
                imgSrc: "./img/fish/long.png",
                id: 36
            },
            {
                name: "Bowfin",
                isCaught: false,
                imgSrc: "./img/fish/bow.png",
                id: 37
            },
            {
                name: "Common Carp",
                isCaught: false,
                imgSrc: "./img/fish/cc.png",
                id: 38
            },
            {
                name: "Smallmouth Buffalo",
                isCaught: false,
                imgSrc: "./img/fish/sb.png",
                id: 39
            },
            {
                name: "Freshwater Drum",
                isCaught: true,
                imgSrc: "./img/fish/fd.png",
                id: 40
            },
            {
                name: "Yellow Perch",
                isCaught: false,
                imgSrc: "./img/fish/yp.png",
                id: 41
            },
            {
                name: "Walleye",
                isCaught: false,
                imgSrc: "./img/fish/wall.png",
                id: 42
            },
            {
                name: "Rainbow Trout",
                isCaught: false,
                imgSrc: "./img/fish/rt.png",
                id: 43
            },
            {
                name: "Brook Trout",
                isCaught: false,
                imgSrc: "./img/fish/bt.png",
                id: 44
            },
            {
                name: "Brown Trout",
                isCaught: false,
                imgSrc: "./img/fish/brt.png",
                id: 45
            },
            {
                name: "Rock Bass",
                isCaught: false,
                imgSrc: "./img/fish/rock.png",
                id: 46
            },
            {
                name: "Alligator gar",
                isCaught: false,
                imgSrc: "./img/fish/ag.png",
                id: 47
            },
            {
                name: "Spotted Gar",
                isCaught: false,
                imgSrc: "./img/fish/sg.png",
                id: 48
            },

            
        ]
    }
    return fishData
}