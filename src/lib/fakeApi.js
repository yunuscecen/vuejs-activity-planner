const data = {
    activities : {
        '1546968934': {
            id: '1546968934',
            title: 'My first Activity',
            notes: 'This is my first note in activity planner',
            progress: 0,
            category: '1546969049',
            createdAt: 1546969144391,
            updatedAt: 1546969144391
        },
    },
    categories : {
        '1546969049': {text: 'shop', id : '1546969049'},
        '1546969225': {text: 'learn', id : '1546969225'},
        '1546969225': {text: 'vuejs', id : '1546969225'},
        '1546969225': {text: 'nodejs', id : '1546969225'}
    }
}

class FakeApi {

    fillDB () {
        this.commitData(data)
    }
    
    ifNotfillDb(){
        if(!localStorage.getItem("activity_data")){
            this.fillDB()
        }
    }
    
    commitData (data) {
        localStorage.setItem("activity_data", JSON.stringify(data))
    }

    getData () {
        const activityData = localStorage.getItem("activity_data")
        return JSON.parse(activityData)
    }

    canContinue ()  {
        return true
    }

    get (resource, { force = 0}) {
        return new Promise((resolve, reject) => {
            this.asyncCall(() => {
                if(force || this.canContinue()){
                    const data = this.getData();
                    resolve({...data[resource]})
                }else {
                    reject("Cannot fetch " + resource)
                }
            })
        })
    }

    post (resource, item) {
        return new Promise((resolve, reject) => {
            const data = this.getData()
            data[resource][item.id] = item
            this.commitData(data)
            resolve(item)
        })
    }

    delete (resource, item) {
        return new Promise((resolve, reject) => {
            const data = this.getData()
            delete data[resource][item.id]
            this.commitData(data)
            resolve(item)
        }); 
    }
    
    asyncCall(cb) {
        setTimeout(cb,300)
    }

    
    
    
    
}

export default new FakeApi()