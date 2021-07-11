import React, { useState } from "react";
import images from "./default-pfp.png";
import "../App.css";

function Tweet() {
  const HASHTAG_FORMATTER = string => {
    return string.split(/((?:^|\s)(?:@[a-z\d-]+|#[a-z\d-]+))/gi).filter(Boolean).map((v,i)=>{
      if(v.includes('@') || v.includes('#')){
        return <span key={i} style={{color:'rgba(29, 161, 242, 1)'}}>{v}</span>
      }   else{
        return <span key={i}>{v}</span>
      }
    })
  };
  const [remove, setRemove] = useState(false);
  const data = {
    firsname: "Name",
    username: "Username",
    time: "12:00",
    date: "1",
    month: "Jan",
    year: "2021",
    tweet: "Your tweet! ",
    am_pm: "PM",
    proImage: images,
    retweets: "500",
    quotetweets: "964",
    likes: "987",
  };

  const [fileds, SetFileds] = useState(data);
  const [pro, setPro] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if(name==="tweet")
    {
    value = value.split("\n").map((str) => {
    
      return (
        <span>
          {HASHTAG_FORMATTER(str)}
          <br />
        </span>
      );
    });
  }

    SetFileds({ ...fileds, [name]: value });
  };
  const generateRandom = () => {
   
    let fretweets = Math.round(Math.random() * 90000 + 1);
    let flikes = Math.round(Math.random() * 90000 + 1);
    let fquotetweets = Math.round(Math.random() * 90000 + 1);
    if (fretweets >= 1000) {
      fretweets /= 1000;
      fretweets = fretweets.toFixed(1);
    }

    if (flikes >= 1000) {
      flikes /= 1000;
      flikes = flikes.toFixed(1);
    }

    if (fquotetweets >= 1000) {
      fquotetweets /= 1000;
      fquotetweets = fquotetweets.toFixed(1);
    }
    SetFileds({
      ...fileds,
      likes: `${flikes}K`,
      retweets: `${fretweets}K`,
      quotetweets: `${fquotetweets}K`,
    });
  };
  

  const handleProfile = (e) => {
    SetFileds({ ...fileds, proImage: URL.createObjectURL(e.target.files[0]) });
    setPro(true);
    console.log(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="tweet-main">
      <div className="border-tweet">
        <div className="headerPart">
          <img src={fileds.proImage || images} alt="profile-pic" />
          <div className="usernames" style={{ marginTop: "5px" }}>
            <span
              style={{
                marginLeft: "10px",
                color: "black",
                fontWeight: "bold",
                wordBreak: "break-word",
              }}
            >
              {fileds.firsname}{" "}
              {remove && (
                <span
                  style={{
                    verticalAlign: "center",
                    overflowWrap: "break-word",
                    position: "relative",
                    top: "2px",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{ height: "1rem" }}
                    fill="rgba(29,161,242,1.00)"
                  >
                    <g>
                      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                    </g>
                  </svg>
                </span>
              )}
            </span>

            <br />
            <span
              style={{
                marginLeft: "10px",
                color: "#657786",
                wordBreak: "break-word",
              }}
            >
              @{fileds.username}
            </span>
          </div>
        </div>
        <h3
          style={{
            fontSize: "23px",
            color: "black",
            fontWeight: "normal",
            wordBreak: "break-word",
          }}
        >
          {fileds.tweet}
        </h3>
        <p style={{ color: "#657786" }}>
          {fileds.time} {fileds.am_pm} ·
          {` ${fileds.month} ${fileds.date} , ${fileds.year}`}
        </p>

        <div className="numbers">
          <span>{fileds.retweets}</span> Retweets
          <span style={{ marginLeft: "30px" }}>{fileds.quotetweets} </span>{" "}
          Quote Tweets
          <span style={{ marginLeft: "30px" }}>{fileds.likes} </span> Likes
        </div>

        <div className="emojis">
          <svg viewBox="0 0 24 36" className="tweetemojis">
            <g>
              <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>{" "}
            </g>
          </svg>
          <svg viewBox="0 0 24 36" className="tweetemojis">
            <g>
              <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>{" "}
            </g>
          </svg>
          <svg viewBox="0 0 24 36" className="tweetemojis">
            <g>
              <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>{" "}
            </g>
          </svg>
          <svg viewBox="0 0 24 36" className="tweetemojis">
            <g>
              <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>{" "}
              <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <div style={{ position: "absolute", left: "36%" }}>
        <br />
        <span style={{ display: "inline-flex" }}>
          {" "}
          <h4>Generate random retweets , likes , quotetweets</h4>{" "}
          <button className="generateButton" onClick={generateRandom}>
            Generate ⟳
          </button>
        </span>
      </div>

      <div className="container">
        <h5>Add verified tag</h5>
        <input
          type="checkbox"
          onClick={() => {
            setRemove(!remove);
          }}
        />
        <h3>Name</h3>
        <input
          placeholder="Enter name"
          name="firsname"
          onChange={(e) => handleChange(e)}
        />
        <h3>User Name</h3>
        <input
          placeholder="Enter username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <h3>Time</h3>
        <div style={{ display: "inline-flex" }}>
          <input
            placeholder="Enter time (MM:SS)"
            name="time"
            onChange={(e) => handleChange(e)}
          />
          <select
            onChange={(e) => handleChange(e)}
            name="am_pm"
            style={{ marginLeft: "5px", border: "1px solid #007BFF" }}
          >
            <option selected="" disabled>
              AM / PM
            </option>
            <option value="AM">AM</option>
            <option value="PM" selected>
              PM
            </option>
          </select>
        </div>
        <h3>Date</h3>
        <input
          placeholder="Enter date"
          name="date"
          type="number"
          min="1"
          max="31"
          style={{ width: "100px" }}
          onChange={(e) => handleChange(e)}
        />
        <h3>Month</h3>

        <select onChange={(e) => handleChange(e)} name="month">
          <option selected="" disabled>
            Month
          </option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
        <h3>Year</h3>
        <input
          placeholder="Enter year"
          name="year"
          onChange={(e) => handleChange(e)}
        />
        <h3>Tweet</h3>
        <textarea
          rows="10"
          cols="50"
          id="tweet"
          style={{
            resize: "none",
            outline: "none",
            border: "1px solid #007BFF",
            whiteSpace: "pre-wrap",
          }}
          placeholder="Enter tweet"
          name="tweet"
          onChange={(e) => handleChange(e)}
        />
        <h3>Profile picture</h3>
        <input type="file" name="proImage" onChange={(e) => handleProfile(e)} />
        <br />

        <br />
        <br />
      </div>
    </div>
  );
}

export default Tweet;