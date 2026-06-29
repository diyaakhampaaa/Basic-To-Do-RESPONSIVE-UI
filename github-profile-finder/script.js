const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username");

const profileCard = document.getElementById("profile-card");

const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bio = document.getElementById("bio");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

const locationEl = document.getElementById("location");
const profileLink = document.getElementById("profile-link");

const error = document.getElementById("error");

searchBtn.addEventListener("click", getProfile);

usernameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        getProfile();

    }

});

async function getProfile() {

    const username = usernameInput.value.trim();

    if (username === "") {

        error.textContent = "Please enter a GitHub username.";

        profileCard.classList.add("hidden");

        return;

    }

    error.textContent = "";

    try {

        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (response.status === 404) {

            error.textContent = "User not found.";

            profileCard.classList.add("hidden");

            return;

        }

        const data = await response.json();

        avatar.src = data.avatar_url;

        nameEl.textContent = data.name || data.login;

        bio.textContent = data.bio || "No bio available.";

        followers.textContent = data.followers;

        following.textContent = data.following;

        repos.textContent = data.public_repos;

        locationEl.textContent =
            data.location || "Location not available.";

        profileLink.href = data.html_url;

        profileCard.classList.remove("hidden");

    }

    catch (err) {

        error.textContent = "Something went wrong. Please try again.";

        profileCard.classList.add("hidden");

    }

}