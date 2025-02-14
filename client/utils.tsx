
function itemText(data: number){
    if(data <= 1){
      return `${data} item`
    }

    return `${data} itens`
}

export default itemText