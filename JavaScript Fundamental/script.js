function handleSubmit() {
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);
    const isSubscribed = document.getElementById('subscribe').checked;
    const hobby = document.getElementById('hobby').value;

    const userDetails = {
        name: name,
        age: age,
        subscribed: isSubscribed,
        hobby: hobby
    };

    console.log("User Name (String):", name);
    console.log("User Age (Number):", age);
    console.log("Subscribed (Boolean):", isSubscribed);
    console.log("Hobby (String):", hobby);
    console.log("User Details (Object):", userDetails);

    alert(`Name: ${userDetails.name}\nAge: ${userDetails.age}\nSubscribed: ${userDetails.subscribed}\nHobby: ${userDetails.hobby}`);
}
