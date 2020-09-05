const {performance} = require('perf_hooks');

const nemo1 = ['NEMO']
const large = new Array(100000).fill('NEMO')

function findingNemo1(nemo) {
    let t0 = performance.now()
    for (let i=0; i<nemo.length; i++) {
        if(nemo[i] === 'NEMO') {
            console.log('FOUND NEMO!')
        }
    }
    let t1 = performance.now()
    console.log('Time taken to find Nemo: ' + (t1 - t0) + ' Milliseconds')
}

findingNemo1(large)
