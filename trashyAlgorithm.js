function calculateTrashyness(answer1, answer2, answer3, answer4, answer5, answer6){
    var userPoints = 0
    
    if (answer1 === 'lil-pump'){
        userPoints += 4
    }  
    
    if (answer1 === 'Iggy-Azalea'){
        userPoints += 2
    } 
    
    if (answer1 === 'XXXTentacion'){
        userPoints += 3
    } 
    
    if (answer1 === 'Lil-Uzi-Vert'){
        userPoints += 1
    } 
    
    
 
 if (answer2 === 'Pineapple-On-Pizza'){
        userPoints += 4
    }  
    
    if (answer2 === 'Candy-Corn'){
        userPoints += 2
    } 
    
    if (answer2 === 'Olives'){
        userPoints += 3
    } 
    
    if (answer2 === 'Tofu'){
        userPoints += 1
    } 
    
    
    if (answer3 === 'Drake&Josh'){
        userPoints += 4
    }  
    
    if (answer3 === 'The-Walking-Dead'){
        userPoints += 2
    } 
    
    if (answer3 === 'Rick&Morty'){
        userPoints += 3
    } 
    
    if (answer3 === 'Riverdale'){
        userPoints += 1
    } 
    
    
    
     if (answer4 === 'Juice'){
        userPoints += 4
    }  
    
    if (answer4 === 'Soda'){
        userPoints += 2
    } 
    
    if (answer4 === 'Water'){
        userPoints += 3
    } 
    
    if (answer4 === 'Coffee'){
        userPoints += 1
    } 
    
    
    
      if (answer5=== 'supreme'){
        userPoints += 4
    }  
    
    if (answer5 === 'gucci'){
        userPoints += 2
    } 
    
    if (answer5 === 'Champian'){
        userPoints += 3
    } 
    
    if (answer5 === 'Nike'){
        userPoints += 1
    } 
    
    
    
    
      if (answer6 === 'baseball'){
        userPoints += 4
    }  
    
    if (answer6 === 'basketball'){
        userPoints += 2
    } 
    
    if (answer6 === 'soccer'){
        userPoints += 3
    } 
    
    if (answer6 === 'Football'){
        userPoints += 1
    } 
    
    

    console.log(userPoints)
 
    
    if (userPoints < 6) {
        return 'trashy'
    } else if (userPoints < 8 ) {
        return 'shit'
    } else if (userPoints < 12 ) {
        return 'filthy'
    } else if (userPoints < 16) {
        return 'oscar'
    } else if (userPoints < 20) {
        return 'trash bag'
    } else if (userPoints >= 24) {
        return 'glittery trash'
    }
    
}   
    


module.exports = {
    calculateTrashyness
}