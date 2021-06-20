console.log('CV SCREENER');
// ARRAY OF OBJECTS WHICH CONTAINS INFORMATION ABOUT THE CANDIDATES
const data = [
    {
        name:'raja',
        age:21,
        city:'mansehra',
        language:'javascript',
        frameWork:'react js',
        image:'raja.jpg'
    },
    {
        name:'usman',
        age:22,
        city:'abbottabad',
        language:'javascript',
        frameWork:'angular js',
        image:'usman.jpg'
    },
    {
        name:'murad',
        age:23,
        city:'haripur',
        language:'javascript',
        frameWork:'node js',
        image:'murad.jpg'
    },
    {
        name:'kiyani',
        age:24,
        city:'pindi',
        language:'python',
        frameWork:'flask',
        image:'kiyani.jpg'
    },
    {
        name:'ali',
        age:25,
        city:'islamabad',
        language:'python',
        frameWork:'Django',
        image:'ali.jpg'
    },
] 

// CV ITERATORS
function cvIterator(profiles) {
    let nextindex = 0;
    return{
        next : function () {
            return nextindex<profiles.length ? 
            {value:profiles[nextindex++],done:false} :
            {done:true}
        }
    }
    
}
const candidates = cvIterator(data);

nextCV();
//BUTON LISTENER FOR NEXT BUTON
const next = document.getElementById('next');
next.addEventListener('click',nextCV);  

function nextCV(){
    console.log('clicked the next button');
  const currentCandidate = candidates.next().value;
  if(currentCandidate!=undefined){
  let img = document.getElementById('img');
  let profile = document.getElementById('profile');
  img.innerHTML = `<img width=270px height=270px src='${currentCandidate.image}' style="border-radius:50%">`;
  profile.innerHTML = `<ul class=" list-group text-uppercase">
  <li class="bg-dark text-white list-group-item">Name: ${currentCandidate.name}</li>
  <li class="bg-dark text-white list-group-item">${currentCandidate.age} years old</li>
  <li class="bg-dark text-white list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="bg-dark text-white list-group-item">Primarily works on ${currentCandidate.language}</li>
  <li class="bg-dark text-white list-group-item">uses ${currentCandidate.frameWork} framework</li>
  </ul>`;
  }
  else{
      alert("End of candidate applications");
      window.location.reload();
  }
}
