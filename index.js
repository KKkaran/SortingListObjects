var scores = [
            {
             "name":"sodhi",
             "score": 10   
            },
            {
             "name":"Karan",
             "score":560   
            },
            {
             "name":"Tim",
             "score": 1126   
            },
            {
              "name":"Taskysdsd",
              "score":192   
            },
            {
                "name" : "Toshi",
                "score" : 2000
            }
]
var newList = []
var score = []

scores.forEach(function(e){
    score.push(e.score)
})
sortArray(score) //[56,126,192] ----- >>> [192,126,56]
createNewObjectsList()




function createNewObjectsList(){

    score.forEach(t =>{
        //console.log(t)

        scores.forEach(y =>{
            //console.log(y.name)
            if(t === y.score){
                //console.log(y.name)
                //scores.pop(y)
                var tg = {}
                tg.name = y.name
                tg.score = t
                //scores.pop(y)
                newList.push(tg)
                //console.log(newList.length)
            }
        })
    })
}
function sortArray(array){
    for(var f=array.length;f>=0;f--){
        for(var x = 0;x < f-1; x++){
            if(score[x] < score[x+1]){
                var t = score[x]
                score[x] = score[x+1]
                score[x+1] = t
            }
        }
    }
    //console.log(array)
}
console.log(newList)//prints the original score in descending order....








































// var api = "https://randomuser.me/api"

// function getPerson(){
//     fetch(api)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(res){
//         var result = res.results[0];

//         var name = result.name;
//         console.log(result.picture.medium)
//         console.log(name.title + ". " + name.first + " " + name.last)


//         var picture = $("<img>")
//                     .attr("src",result.picture.large)
//         var namePerson = $("<h2>")
//                     .text(name.title + ". " + name.first + " " + name.last)
//         var button = $("<button>")
//                     .attr("type","submit")
//                     .text("NEXT")
//                     .addClass("next")
//         $(".ShowPerson").append(picture,namePerson,button)

//     })
// }
// $(".ShowPerson").on("click","button",function(){
//     getPerson()
// })

// getPerson();