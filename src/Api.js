export default () => fetch(`https://yesno.wtf/api/`)
    .then(response => response.json());
