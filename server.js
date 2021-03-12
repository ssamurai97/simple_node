function wait(ms=0){
	return new Promise(resolve => setTimeout(resolve, ms));
}



async function run(){
  while(1){
    console.log(`Containers Rule!`);

	  await wait(5000);
  }
}


run();
