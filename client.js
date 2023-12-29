async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./sw.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BPHcUQEW_OLPLwyiDJuK0POa2hNYClIr7boZHmbOmMjDnrr_NgzmM0_DQJU622sPFTYertotkv1tFmk1lFe7iNc',
    });
    console.log(subscription);
    await fetch(`http://192.168.2.139:5001/subscribe`, {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}

registerServiceWorker()