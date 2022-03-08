document.addEventListener('DOMContentLoaded', () => {

    const divGrid = document.querySelector('.grid');
   // document.getElementsByClassName('gird')[0]
    
   /*
   TIP:
    - In this example, we are using an array variable to define the grid. This is practical for a game like pacman, where the cells in the grid have common properties. (wall, pellet, hallway, etc.)
    - You could also just use a for loop to create the grid
           If you choose to use the for loop, you might consider a statement like

           for (let i = 0; i < 684; i++) {
                //create a div and append as a child element to the grid div
            }

            Notice how in this case you are defining the set number of cells to create.
   */
   const pacmanBoard = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
                        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
                        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
                        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
                        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
                        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
                        1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,
                        0,0,0,0,1,1,0,1,1,4,0,0,0,0,0,0,0,0,4,1,1,0,1,1,0,0,0,0,
                        1,1,1,0,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,0,1,1,1,
                        1,1,1,0,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,0,1,1,1,
                        4,4,4,4,4,0,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,0,4,4,4,4,4,
                        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
                        1,1,1,1,0,0,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,0,0,1,1,1,1,
                        1,1,1,1,0,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,0,1,1,1,1,
                        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
                        1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,
                        1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,
                        1,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,1,
                        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
                        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
                        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
                        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
                        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
                        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

   pacmanBoard.forEach(indexValue => {
        const gridCells = document.createElement('div');
        gridCells.classList.add('gridCell');

        switch (indexValue) {
            case 0:
                gridCells.classList.add('pellet');
                break;
            case 1:
                gridCells.classList.add('wall');
                break;
            case 2:
                gridCells.classList.add('ghostLair');
                break;
            case 3:
                gridCells.classList.add('power');
                break;
            default:
                gridCells.classList.add('hallway');
                break;
        }   
        divGrid.appendChild(gridCells);

});


})
