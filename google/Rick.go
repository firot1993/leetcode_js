package main

import (
	"flag"
	"fmt"
)

func swap(a, b *int) {
    b, a = a, b
}

var mode = flag.String("mode", "", "process mode")

func main(){
	flag.Parse()
	fmt.Println(*mode)
}