import React, { useState } from "react";
import {
  FaPlay,
  FaArrowRight,
  FaChartLine,
  FaHandPointer,
  FaRegUserCircle,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { MdContentPasteSearch } from "react-icons/md";
import { BiSolidFile } from "react-icons/bi";
import { FaFilePen, FaArrowRightLong } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const companies = [
    "YouTube",
    "coinbase",
    "Airtable",
    "Dropbox",
    "Google",
    "Instagram",
    "HashiCorp",
    "Microsoft",
  ];

  const tools = [
    {
      id: 1,
      title: "Writing Blog Content",
      description:
        "Consider what your readers are interested in, what problems they need solutions for, or what trends are currently relevant in your industry.",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try Writing Blog Content",
    },
    {
      id: 2,
      title: "Email Marketing",
      description:
        "Email can be used to inform subscribers about upcoming events, webinars, workshops, conferences, or product launches.",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try Email Marketing",
    },
    {
      id: 3,
      title: "News Article",
      description:
        "We denounce with righteous indignation dislike men who are so beguiled and demoralized by the charms of pleasure",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try News Article",
    },
    {
      id: 4,
      title: "Social Media Content",
      description:
        "Could you please provide me with more information about the type of content you're looking to describe",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try Social Media Content",
    },
    {
      id: 5,
      title: "SEO Content",
      description:
        "In order to have a result that is more in with the final result, the graphic designers designers or typographers report the",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try SEO Content",
    },
    {
      id: 6,
      title: "Technical Writing",
      description:
        "It provides feedback on style, readability, overused words, clichés, and more. It also offers integration with popular word processors",
      image:
        "https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg",
      links: "Try Technical Writing",
    },
  ];

  const faqs = [
    {
      question: "Can I use Unwrapped for client projects?",
      answer:
        "Yes, absolutely! Unwrapped is designed to help professionals create high-quality content for client projects. Many of our users successfully use our AI writing tool for client work, including agencies, freelancers, and marketing teams.",
    },
    {
      question: "Where is Unwrapped made?",
      answer:
        "Unwrapped is developed by our international team with headquarters in San Francisco, California. Our development teams work remotely across different time zones to provide 24/7 support and continuous improvements to our platform.",
    },
    {
      question: "What types of content can I create with Unwrapped?",
      answer:
        "Unwrapped supports a wide variety of content types including blog posts, articles, marketing copy, social media content, product descriptions, email campaigns, technical documentation, and creative writing. Our AI is trained on diverse writing styles to meet various content needs.",
    },
    {
      question: "How does the AI ensure content quality?",
      answer:
        "Our AI uses advanced natural language processing and machine learning algorithms trained on high-quality content. It includes built-in plagiarism checking, grammar correction, and style optimization to ensure your content meets professional standards.",
    },
    {
      question: "Is there a limit to how much content I can generate?",
      answer:
        "Content generation limits depend on your subscription plan. Our Basic plan includes 10,000 words per month, Standard offers 100,000 words, and our Golden plan provides unlimited content generation. You can always upgrade your plan as your needs grow.",
    },
    {
      question: "Can I customize the writing style and tone?",
      answer:
        "Yes! Unwrapped allows you to customize writing style, tone, and voice to match your brand or specific requirements. You can choose from various tones like professional, casual, persuasive, or technical, and even train the AI on your preferred writing style.",
    },
  ];

  return (
    <section className="bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section Start*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Unlock The Power <span className="text-black">of Writing</span> AI
              Create Content Faster
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Generate dynamic & compelling content effortlessly with our AI
              writing tool. Whether you need blog social media captions, or
              product descriptions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-yellow-400 hover:bg-transparent border-2 border-yellow-400 hover:border-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2">
                Start For Free
              </button>

              <button className="bg-gray-200 hover:bg-transparent hover:border-2 hover:border-yellow-400 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2">
                Browse Feature
              </button>
            </div>
          </div>

          <div className="relative flex-1">
            <img
              src="https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg"
              alt="AI Writing Interface"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="mx-8 text-gray-500 font-semibold text-lg hover:text-gray-700 transition-colors duration-200 shrink-0"
                >
                  {company}
                </div>
              ))}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="mx-8 text-gray-500 font-semibold text-lg hover:text-gray-700 transition-colors duration-200 shrink-0"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End*/}

      {/* New Features Start */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Generate content using AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please provide me with more information about the type of content
              you're looking for, such as a topic a brief description, or any
              specific requirements you have in mind
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="bg-yellow-300 flex gap-8 rounded-2xl p-8 border border-yellow-200">
                <div>
                  <div className="p-3 rounded-lg shrink-0">
                    <MdContentPasteSearch className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Generates quality contents
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The more specific you are with your request, the better I
                    can assist you in generating relevant and well-written
                    content.
                  </p>
                </div>
              </div>

              <div className="bg-white flex gap-8 rounded-2xl p-8 border border-gray-200 hover:border-yellow-200">
                <div>
                  <div className="p-3 rounded-lg shrink-0">
                    <FaHandPointer className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Provide Usefull Suggestions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    This can be through books, online courses, workshops, or
                    even learning from experienced individuals in your field.
                  </p>
                </div>
              </div>

              <div className="bg-white flex gap-8 rounded-2xl p-8 border border-gray-200 hover:border-yellow-200">
                <div>
                  <div className="p-3 rounded-lg shrink-0">
                    <FaChartLine className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Improves Products Productivity
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implement automation in the manufacturing process to reduce
                    human errors, increase output speed & decrease production
                    time.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <img
                src="https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Features End */}

      {/* Content Section Start */}
      <div className="bg-linear-to-br from-gray-50 to-gray-100 pt-20 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Few Steps To Write Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Before you start writing, it's essential to know who your target
              audience is. Consider their interests, preferences, and knowledge
              level.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl border-2 border-gray-100 justify-center items-center">
              <button className="flex items-center gap-3 bg-white border border-white px-8 py-4 rounded-lg hover:border-yellow-400 transition w-full md:w-auto justify-center">
                <span className="text-2xl">
                  <BiSolidFile />
                </span>
                <span className="font-semibold text-gray-800">
                  Select Writing
                </span>
              </button>

              <button className="flex items-center gap-3 bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-yellow-300 transition w-full md:w-auto justify-center">
                <span className="text-2xl">
                  <FaFilePen />
                </span>
                <span>Generate Content</span>
              </button>

              <button className="flex items-center gap-3 bg-white border border-white px-8 py-4 rounded-lg hover:border-yellow-400 transition w-full md:w-auto justify-center">
                <span className="text-2xl">
                  <IoIosChatbubbles />
                </span>
                <span className="font-semibold text-gray-800">
                  Describe Topic
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg"
                alt="People writing content"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Unraveling the Next-Level Features Redefining the AI Landscape
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Integrated into critical decision-making processes, the need for
                transparency and interpretability grows.
              </p>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-2xl">
                    <IoCheckmarkCircleSharp />
                  </span>
                  <span>Green Energy and Renewable Resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-2xl">
                    <IoCheckmarkCircleSharp />
                  </span>
                  <span>Circular Economy and Waste Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-400 text-2xl">
                    <IoCheckmarkCircleSharp />
                  </span>
                  <span>Smart Cities and Sustainable Urbanization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Content Section End */}

      {/* Tools Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Generate AI Copy Writing Favorite Tools
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The discovery was made by Richard McClintock, a professor of Latin
              at Hampden-Sydney College in Virginia, who faced the challenge of
              making AI tools more accessible for content creators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border-gray-200 rounded-2xl shadow-sm hover:shadow-lg border-2 hover:border-yellow-400 transition-all duration-300 p-8 text-center"
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-40 h-40 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex justify-center items-center gap-2 mt-6 text-black font-semibold cursor-pointer">
                  {tool.links} <FaArrowRightLong />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10 flex justify-center">
            <button className="flex justify-center items-center gap-2 bg-yellow-300 border border-yellow-300 hover:bg-transparent hover:border-yellow-300 text-black font-semibold text-lg px-10 py-3 rounded-lg transition-all duration-300">
              See All <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visionex Received 4.8/5 Stars in Over 10,000+ Reviews.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The discovery was made by Richard McClintock, a professor of Latin
              at Hampden-Sydney College in Virginia, who faced the
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      As an avid writer, I've always been on the lookout for
                      tools that can elevate my writing experience and help me
                      craft compelling content effortlessly. My search finally
                      ended when I discovered the Writing AI Tool. This
                      incredible AI
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Jenna Knight
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Marketing Coordinator
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      The time-saving aspect cannot be overstated. Instead of
                      spending hours brainstorming, researching, and writing, I
                      can now get a solid draft within minutes. This has allowed
                      me to focus on other crucial aspects of my work, resulting
                      in increased productivity & a better work-life balance.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Ava Thompson
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      But beyond its efficiency, the tool's ability to spark
                      creativity is unparalleled. It acted as a reliable
                      brainstorming partner, suggesting fresh ideas and unique
                      angles to explore in my writing. I found myself exploring
                      topics I wouldn't have
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Sophia Reed
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      In a world where content creation is paramount, this AI
                      writing website has become my secret weapon. It
                      consistently delivers outstanding content, saves me time,
                      and empowers me to produce top-notch materials for various
                      purposes. I wholeheartedly recommend this platform to
                      anyone in need of reliable, efficient, and high-quality AI
                      writing services. As someone who often finds themselves
                      grappling with writer's block, tight deadlines, and the
                      need for high-quality content, this platform has been a
                      true game-changer for me.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Max Brooks
                        </h4>
                        <p className="text-gray-500 text-xs">SEO Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      The AI's ability to generate coherent and engaging content
                      across a wide range of topics is nothing short of
                      impressive. Whether I need a blog post, a marketing copy,
                      or even a complex research paper, the AI consistently
                      delivers content that not only meets but often exceeds my
                      expectations. The customer support is exceptional as well.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Oliver Hayes
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Digital Marketer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      The AI's ability to generate coherent and engaging content
                      across a wide range of topics is nothing short of
                      impressive. Whether I need a blog post, a marketing copy,
                      or even a complex research paper, the AI consistently
                      delivers content that not only meets but often exceeds my
                      expectations. The customer support is exceptional as well.
                      Anytime I've had a question or needed assistance, the team
                      behind the website has been prompt, helpful, and dedicated
                      to ensuring my satisfaction.
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Lily Morgan
                        </h4>
                        <p className="text-gray-500 text-xs">
                          Product Designer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      Moreover, I must commend the AI for its impressive
                      research capabilities. Whenever I needed to include
                      supporting facts or statistical data, the tool provided
                      accurate and up-to-date information, saving me precious
                      time that I would
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Ethan Parker
                        </h4>
                        <p className="text-gray-500 text-xs">Content Creator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div>
                    <RiDoubleQuotesL className="text-5xl text-yellow-300" />
                    <p className="text-gray-600 text-sm mb-4 leading-loose">
                      As someone who often finds themselves grappling with
                      writer's block, tight deadlines, and the need for
                      high-quality content, this platform has been
                    </p>
                    <div className="flex items-center gap-3">
                      <div>
                        <FaRegUserCircle className="text-5xl" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-2xl">
                          Eleanor Pena
                        </h4>
                        <p className="text-gray-500 text-xs">SEO Expert</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tool Section End */}

      {/* Pricing Section Start */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Affordable Pricing Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Create multiple pricing tiers with varying levels of features or
              benefits. This allows you to cater to different customer needs and
              budgets.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="border border-gray-300 p-2 flex justify-center items-center gap-4 rounded-2xl">
                <span className="font-medium text-lg text-black bg-yellow-300 px-6 py-3 rounded-2xl">
                  Monthly
                </span>
                <span className="font-medium text-lg text-gray-500 px-6 py-3">
                  Yearly
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200">
              <div>
                <div className="bg-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Basic Plan
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        $19
                      </span>
                      <span className="text-gray-600 ml-2">/Monthly</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <span className="text-gray-600">Single User</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        10,000 words per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Basic Writing Styles
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Plagiarism Checking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Email Customer Support
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Basic API Access</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-yellow-400 transform scale-105">
              <div>
                <div className="bg-yellow-300 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Standard Plan
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        $49
                      </span>
                      <span className="text-gray-600 ml-2">/Monthly</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <span className="text-gray-600">5 User</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        100,000 words per month
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Advanced Writing Styles
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Plagiarism Checking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Email + Chat Customer Support
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">API Access</span>
                    </li>
                  </ul>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200">
              <div>
                <div className="bg-gray-200 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Golden Plan
                  </h3>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        $119
                      </span>
                      <span className="text-gray-600 ml-2">/Monthly</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <span className="text-gray-600">Unlimited User</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Unlimited</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Advanced Writing Styles
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Plagiarism Checking</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">
                        Priority Support Customer Support
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-600">Custom Solutions</span>
                    </li>
                  </ul>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section End */}

      {/* FAQ Section Start */}
      <div className="bg-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our AI writing service is designed to provide assistance in
              generating high-quality written content. It can help with tasks
              such as writing articles, blog posts, marketing copy, and more.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-lg"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 shrink-0 ml-2">
                    {openFaqIndex === index ? (
                      <FaMinus className="w-5 h-5" />
                    ) : (
                      <FaPlus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section End */}

      {/* Help Section Start */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-yellow-400 to-yellow-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to meet your personal
                  <br />
                  AI writing assistant?
                </h2>

                <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl leading-relaxed">
                  Take action now to make a difference! Whether it's supporting
                  <br />a cause you're passionate about
                </p>

                <button className="bg-black hover:bg-gray-800 text-white font-semibold text-sm md:text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center lg:justify-start gap-3 mx-auto lg:mx-0">
                  Start Writing For Free
                </button>
              </div>

              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/032/471/724/non_2x/website-design-for-graphic-and-web-design-vector.jpg"
                  alt="AI Writing Assistant"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section End */}
    </section>
  );
};

export default Home;
