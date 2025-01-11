import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const keyDates = [
    { event: "पौष पूर्णिमा", date: "13 जनवरी 2025" },
    { event: "मकर संक्रांति", date: "14 जनवरी 2025" },
    { event: "मौनी अमावस्या", date: "29 जनवरी 2025" },
    { event: "बसंत पंचमी", date: "03 फरवरी 2025" },
    { event: "माघी पूर्णिमा", date: "12 फरवरी 2025" },
    { event: "महा शिवरात्रि", date: "26 फरवरी 2025" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <h1
        id="hero"
        className="text-orange-600 text-5xl md:text-7xl font-bold mb-8"
      >
        महाकुंभ 2025
      </h1> */}
      {/* Video Background Section */}
      <section className="relative  flex-grow w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="src/assets/videos/MahaKubh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"></div>
      </section>

      {/* Informational Section */}
      <div className="bg-gray-100 my-8 mx-4 md:mx-12 lg:mx-40 shadow-lg rounded-md">
        <div className="py-4 px-10 ">
          <h2 className="text-2xl md:text-4xl text-gray-800 py-5 text-left">
            महाकुंभ 2025
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-left">
            महा कुंभ मेला रीति-रिवाज़ों से जुड़ा एक विशाल आयोजन होता है, जिसमें
            स्नान समारोह सबसे महत्वपूर्ण होता है। त्रिवेणी संगम में, लाखों
            तीर्थयात्री इस पवित्र प्रथा में हिस्सा लेने के लिए एक साथ एकत्रित
            होते हैं। लोगों का यह मानना है कि इस पवित्र जल में डुबकी लगाने से,
            वे अपने सभी पापों से मुक्त हो सकते हैं, खुद को और अपने पूर्वजों को
            पुनर्जन्म के चक्र से मुक्त कर सकते हैं, और अंततः मोक्ष या आध्यात्मिक
            मुक्ति प्राप्त कर सकते हैं।
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-left">
            स्नान की रस्म के अलावा, तीर्थयात्री पवित्र नदी के किनारे पूजा भी
            करते हैं और कई साधुओं और संतों के नेतृत्व वाले ज्ञानवर्धक प्रवचनों
            में सक्रिय रूप से भाग लेते हैं। हालांकि, प्रयागराज महा कुंभ के दौरान
            पौष पूर्णिमा की शुरुआत के बाद से पवित्र जल में डुबकी लगाना शुभ माना
            जाता है, लेकिन कुछ तारीखें हैं जिनका खास महत्व है। इन तारीखों पर
            शानदार जुलूस निकाले जाते हैं, जिसमें संत, उनके शिष्य और विभिन्न
            अखाड़ों (धार्मिक समाज) के सदस्य शामिल होते हैं। वे शाही स्नान के नाम
            से लोकप्रिय भव्य अनुष्ठान में हिस्सा लेते हैं, जिसे 'राजयोगी स्नान'
            भी कहा जाता है, जिससे महा कुंभ मेले की शुरुआत होती है। राजयोगी
            स्नान, कुंभ मेले का मुख्य आकर्षण होता है और यह जश्न के सबसे भव्य रूप
            को दर्शाता है।
          </p>
          <ul className="list-disc list-inside text-gray-800 leading-relaxed text-left">
            {keyDates.map(({ event, date }) => (
              <li key={event} className="mb-2">
                <strong>{event}</strong>: {date}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-6 leading-relaxed text-left">
            महा कुंभ 2025, एक पवित्र तीर्थ यात्रा और आस्था का जश्न है, जिसमें
            दुनिया के हर कोने से लाखों श्रद्धालु और यात्री आते हैं। जब आप इस
            बेहद खास यात्रा को शुरू करते हैं, तो आपको ऐसे बहुत सारे आकर्षण
            मिलेंगे, जो महा कुंभ को एक अनोखा और भव्य आयोजन बनाते हैं।
          </p>
        </div>
      </div>

      {/* Footer Section */}
    </div>
  );
}
