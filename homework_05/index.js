button.addEventListener("click", () => {
  Promise.resolve().then(() => {
    console.log("Microtask 1");
  });
  console.log("Listener 1");
});

button.addEventListener("click", () => {
  Promise.resolve().then(() => {
    console.log("Microtask 2");
  });
  console.log("Listener 2");
});

// button.click();

function fakeRequest(url) {
  return new Promise((res, rej) => {
    const delayTime = Math.floor(Math.random() * 1000) + 1;

    setTimeout(() => res(url), delayTime);
  });
}

// async function promiseAll(urls) {
//   const result = [];

//   urls.forEach(async (url) => {
//     const response = await fakeRequest(url);
//     result.push(response);
//     console.log(`Got response for url: ${url}`);
//   });

//   //   for (let i = 0; i < urls.length; i++) {
//   //     const response = await fakeRequest(urls[i]);
//   //     result.push(response);
//   //     console.log(`Got response for url: ${urls[i]}`);
//   //   }
//   return Promise.resolve(result);
// }

// const urls = ["1", "2", "3", "4", "5"];
// promiseAll(urls).then((res) => {
//   console.log(`All urls was processed. Result: ${JSON.stringify(res)}`);
// });

function resolveUrlList(urlsArray) {
  const urlRequestResults = [];

  return new Promise((res, rej) => {
    urlsArray.forEach((url) => {
      fakeRequest(url)
        .then((result) => {
          urlRequestResults.push(result);
          console.log(`Got response for url: ${url}`);

          if (urlRequestResults.length === urlsArray.length) {
            res(urlRequestResults);
          }
        })
        .catch((err) => rej(err));
    });
  });
}

const urls = ["1", "2", "3", "4", "5"];
resolveUrlList(urls).then((res) => {
  console.log(`All urls was processed. Result: ${JSON.stringify(res)}`);
});
