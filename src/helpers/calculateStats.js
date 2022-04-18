
function filterTask (arr,act,cat) {
        return arr.filter(item=>item.active==act&&item.category==cat).length
    }

export default  filterTask