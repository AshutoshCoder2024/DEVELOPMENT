// Zodiac_signs size 12
const zodiac_signs = [
  "Aries", // Mesha (मेष)
  "Taurus", // Vrishabha (वृषभ)
  "Gemini", // Mithuna (मिथुन)
  "Cancer", // Karka (कर्क)
  "Leo", // Simha (सिंह)
  "Virgo", // Kanya (कन्या)
  "Libra", // Tula (तुला)
  "Scorpio", // Vrishchika (वृश्चिक)
  "Sagittarius", // Dhanu (धनु)
  "Capricorn", // Makara (मकर)
  "Aquarius", // Kumbha (कुंभ)
  "Pisces", // Meena (मीन)
];

// complement size 31
const compliments = [
  "You are amazing just the way you are!",
  "Your smile brightens up the room.",
  "You have a heart of gold.",
  "You are incredibly talented.",
  "Your positivity is contagious.",
  "You make the world a better place.",
  "You are a true inspiration.",
  "You have a wonderful sense of humor.",
  "You are so kind and thoughtful.",
  "You are stronger than you think.",
  "You have a beautiful soul.",
  "You are a great listener.",
  "You are full of brilliant ideas.",
  "You are a ray of sunshine.",
  "You are capable of achieving anything.",
  "You are loved and appreciated.",
  "You have a unique and special energy.",
  "You are a problem-solving genius.",
  "You are a fantastic friend.",
  "You are brave and courageous.",
  "You are making a difference in the world.",
  "You are one of a kind.",
  "You are a true gem.",
  "You are so creative and imaginative.",
  "You are a natural leader.",
  "You are incredibly resilient.",
  "You are a joy to be around.",
  "You are so thoughtful and caring.",
  "You are destined for greatness.",
  "You are a blessing to everyone around you.",
  "You are simply the best!",
];

// victim-Compliments size 20
const victimCardCompliments = [
  "You always help others, but no one helps you when you need it.",
  "You put everyone first, yet no one appreciates your efforts.",
  "You forgive so easily, but people never value your kindness.",
  "You always support others, but they forget you when you need them.",
  "You never ask for anything, yet people take you for granted.",
  "You always listen to others, but no one listens to you.",
  "You do everything for your friends, but they never do the same for you.",
  "You always stay loyal, yet people betray you without thinking.",
  "You sacrifice your happiness for others, but they never notice.",
  "You spread positivity, but people still misunderstand you.",
  "You go out of your way to help, but people barely acknowledge it.",
  "You always give your best, yet people only point out your mistakes.",
  "You stand by others in their worst times, but they disappear in yours.",
  "You are so patient with everyone, yet no one gives you the same patience.",
  "You always understand others, but they never try to understand you.",
  "You are the nicest person, but people just use your kindness.",
  "You never hold grudges, but people keep hurting you.",
  "You always think about others' feelings, yet yours are ignored.",
  "You are too humble to ask for appreciation, so people forget to give it.",
  "You always do good, but the world never repays you the same way.",
];

//  for Select lifeRecommendations  we use name sur name and day
// ashutosh sahu  22
// 8*4 * 22= 704%30 = 14 which belong to 0-29
// life recommendations  size 30

const lifeRecommendations = [
  "Feed a street dog and show kindness to animals.",
  "Help someone in need without expecting anything in return.",
  "Read a book that inspires and motivates you.",
  "Practice gratitude every day for what you have.",
  "Smile at strangers and spread positivity.",
  "Exercise daily to keep your body and mind healthy.",
  "Spend time in nature and appreciate its beauty.",
  "Learn a new skill that excites you.",
  "Avoid negativity and surround yourself with positive people.",
  "Give genuine compliments to people around you.",
  "Volunteer for a cause you care about.",
  "Write down your thoughts and goals in a journal.",
  "Meditate daily for a peaceful mind.",
  "Limit your screen time and connect with real-life experiences.",
  "Cook a meal for your loved ones and enjoy quality time.",
  "Donate old clothes to those who need them.",
  "Take a break and travel to a new place.",
  "Practice deep breathing whenever you feel stressed.",
  "Learn to say ‘No’ to things that drain your energy.",
  "Forgive others and free yourself from grudges.",
  "Spend quality time with your family and friends.",
  "Be kind to yourself and stop self-criticism.",
  "Save money and invest in your future wisely.",
  "Develop a morning routine that sets a positive tone for the day.",
  "Listen more and talk less to understand people better.",
  "Be honest in your words and actions.",
  "Sleep early and wake up refreshed.",
  "Help elderly people with their daily tasks.",
  "Write a thank-you note to someone who helped you.",
  "Laugh more, worry less, and enjoy life!",
];

// future prediction  size 20
const futurePredictions = [
  "You will become a crorepati and live a luxurious life!",
  "A big opportunity is coming your way soon.",
  "You will travel to your dream destination very soon.",
  "Your hard work will pay off, and success will follow you.",
  "You will meet someone who will change your life for the better.",
  "A surprise windfall of money is on its way to you.",
  "You will achieve all your goals sooner than expected.",
  "Your dream job will become a reality soon.",
  "You are destined for greatness and will inspire many people.",
  "Happiness and peace will soon fill your life.",
  "You will receive unexpected good news very soon.",
  "Your talent will get recognized, and you will become famous.",
  "A dream you thought was impossible will come true.",
  "You will make a huge positive impact on the world.",
  "Your future is filled with love, joy, and success.",
  "You will soon find the perfect balance in your life.",
  "A special person will enter your life and bring happiness.",
  "You will soon achieve financial freedom and live stress-free.",
  "Your passion will turn into a successful career.",
  "Luck is on your side, and great things are coming your way!",
];

const form = document.getElementById("astroForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // name
  const Name = document.getElementById("name").value;
  // Surname
  const Surname = document.getElementById("surname").value;
  // Date
  const Day = Number(document.getElementById("day").value);
  // month
  const Month = Number(document.getElementById("month").value);
  //year
  const Year = Number(document.getElementById("year").value);

  const first_message = ` Hello ${Name} ${Surname}.`;
  const second_message = ` Your Zodiac sign is ${zodiac_signs[Month - 1]}.`;
  const third_message = compliments[Day - 1];

  let index = Math.floor(Math.random() * 20);
  const fourth_message = victimCardCompliments[index];

  index = (Name.length * Surname.length * Day) % 30;
  const fifth_message = lifeRecommendations[index];

  index = (Day * Month * Year) % 20;
  const sixth_message = futurePredictions[index];

  const Result = document.createElement("div");
  Result.id = "result";
  Result.innerHTML = `${first_message} ${second_message}  ${third_message} ${fourth_message} 
   Our Recommendation for you: ${fifth_message} Future prediction: ${sixth_message} `;
  form.appendChild(Result);
  console.log("nccdb");
});
