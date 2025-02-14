function recursiva(max) {
    console.log(max);
    if(max >= 11288) return;
    max++;
    recursiva(max);
}

recursiva(0);