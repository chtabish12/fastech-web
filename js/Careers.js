// // SETTING UP CAREERS
let xhr = new XMLHttpRequest();

let file = "/json/career.json";

xhr.open("GET", file, true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    let jobs = data;

    const divThree = document.querySelector("#jobs-list");

    jobs.forEach((job) => {
      const div = document.createElement("div");
      div.setAttribute("class", "job");

      const heading = document.createElement("h3");
      heading.textContent = job.jobName;

      const discOne = document.createElement("p");
      discOne.textContent = job.jobType;

      const discTwo = document.createElement("p");
      discTwo.textContent = job.jobCategory;

      const link = document.createElement("a");
      link.setAttribute("href", job.jobApplyUrl);
      link.setAttribute("target", "_blank");
      link.setAttribute(
        "class",
        "job-button btn btn-primary has-before has-after"
      );
      link.textContent = "Apply Now";

      div.append(heading);
      div.append(discOne);
      div.append(discTwo);
      div.append(link);

      divThree.append(div);
    });
  }
};
