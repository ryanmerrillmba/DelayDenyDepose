import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// ... (keep blogContent object exactly as is, but I will update the content strings to include links)

const blogContent = {
  "500-dollar-tylenol": {
    title: "The $500 Tylenol: Anatomy of a Medical Bill",
    date: "October 15, 2025",
    description: "Discover the secrets of the Hospital Chargemaster and how to fight back against inflated medical bills.",
    content: `
      <p>It starts with a headache. Not the medical kind, but the financial kind. You open the envelope, expecting a bill for maybe $200 for your brief ER visit. Instead, you see a number that makes your jaw drop: $5,000.</p>
      
      <p>Your heart races. You scan the line items, looking for the mistake. "Room and Board." "Pharmacy Services." And then you see it, buried in the middle of the page: <strong>Acetaminophen - $500.00</strong>.</p>
      
      <p>You know that bottle costs $8.99 at CVS. You know this is robbery. But what you might not know is that this isn't an error. It’s a feature of the system. Welcome to the world of the Hospital Chargemaster.</p>

      <h3>The Secret Menu: What is a Chargemaster?</h3>
      <p>Every hospital maintains a master list of prices known as the "Chargemaster." Think of it like a restaurant menu, but one where the prices are arbitrarily set 1,000% to 10,000% higher than the actual cost of the item.</p>
      
      <p>Why would they do this? It seems insane to charge $500 for a pill. The reason lies in the twisted game of "Discount Chicken" that hospitals play with insurance companies.</p>
      
      <p>Insurance companies never pay full price. They negotiate massive discounts—often 50%, 70%, or even 90% off the "billed charges."</p>
      <ul>
        <li>If the hospital charges $10 for a Tylenol, and the insurer demands a 50% discount, the hospital gets $5. They lose money.</li>
        <li>If the hospital charges $500 for that same Tylenol, and the insurer demands a 90% discount, the hospital gets $50. They make a massive profit.</li>
      </ul>
      
      <p>The Chargemaster prices are inflated specifically to offset these negotiated discounts. It’s a high-stakes negotiation tactic between two corporate giants.</p>

      <h3>The Collateral Damage: You</h3>
      <p>The problem arises when you fall through the cracks. If you are uninsured, out-of-network, or haven't met your high deductible, you aren't protected by those secret negotiated rates. You get billed the full Chargemaster price.</p>
      
      <p>You are essentially being asked to pay the "sticker price" on a car that everyone else is buying for 80% off. It is predatory, it is unethical, and in many cases, it is beatable.</p>

      <h3>Anatomy of the Markup</h3>
      <p>It’s not just Tylenol. Here are common markups we see in medical bill audits:</p>
      <ul>
        <li><strong>IV Bags (Saline):</strong> Cost to hospital: $1. Billed to you: $150 - $800.</li>
        <li><strong>Pregnancy Tests:</strong> Cost to hospital: $5. Billed to you: $200+.</li>
        <li><strong>Teddy Bears (for kids):</strong> "Cough support device." Billed to you: $50.</li>
      </ul>

      <h3>How to Fight Back: A 3-Step Plan</h3>
      <p>If you see these egregious charges, do not write a check. Follow this plan:</p>
      
      <h4>1. Demand an Itemized Bill</h4>
      <p>You cannot fight a summary bill that just says "Pharmacy Services: $2,000." You need the detailed receipt. Call the billing department and say: <em>"I am requesting a full, itemized statement with CPT codes for every line item."</em></p>
      
      <h4>2. Find the "Fair Market Price"</h4>
      <p>Use free tools like <a href="https://www.healthcarebluebook.com/cc/consumer" target="_blank" rel="noopener noreferrer">Healthcare Bluebook</a> or <a href="https://www.fairhealthconsumer.org/" target="_blank" rel="noopener noreferrer">Fair Health Consumer</a>. Look up the CPT code for the service (e.g., "99283" for an ER visit). These tools will tell you what providers in your zip code typically accept as payment.</p>
      
      <h4>3. Offer a Settlement</h4>
      <p>Write a letter to the hospital. State clearly: <em>"You are charging me $500 for Acetaminophen. The fair market price is $10. I am willing to pay the Medicare rate plus 20% for this service, which comes to $12. Please adjust my balance accordingly."</em></p>
      
      <p>They will say no at first. But if you persist, and if you threaten to take your story to local media or the state Attorney General, they will often fold. They know their prices are indefensible.</p>
      
      <p><strong>Don't let them bully you.</strong> The $500 Tylenol is a bluff. Call it.</p>
    `
  },
  "3-magic-words-insurance": {
    title: "3 Magic Words to Say to Insurance Adjusters",
    date: "October 22, 2025",
    description: "Learn the three magic phrases that force insurance adjusters to take your claim seriously.",
    content: `
      <p>Phone calls with insurance companies are designed to be exhausting. The hold music, the transfers, the "accidentally" dropped calls—it’s a war of attrition. They hope that if they make the process painful enough, you will just give up and pay the bill.</p>
      
      <p>But there is a way to cut through the noise. There are specific phrases that act like cheat codes. When you say them, the tone of the conversation changes. The frontline rep stops reading from their script. They realize they are dealing with someone who knows the rules.</p>
      
      <p>Here are the three magic phrases you need to know.</p>

      <h3>1. "Fiduciary Duty"</h3>
      <p><strong>When to use it:</strong> When they are delaying your claim or giving you vague answers about why something isn't covered.</p>
      <p><strong>Why it works:</strong> If your insurance is through your employer, the plan administrator has a legal "fiduciary duty" under federal law (ERISA) to act in your best interest. They are legally required to manage the plan for <em>your</em> benefit, not their profit.</p>
      <p><strong>The Script:</strong> <em>"I would like to remind you that as the plan administrator, you have a fiduciary duty to handle this claim in my best interest. Denying a medically necessary procedure seems to violate that duty."</em></p>

      <h3>2. "Bad Faith"</h3>
      <p><strong>When to use it:</strong> When they deny a claim without a valid reason, ignore your evidence, or delay payment for months.</p>
      <p><strong>Why it works:</strong> "Bad Faith" is a legal term. In many states, if an insurer acts in bad faith, they can be sued for damages far exceeding the original bill—sometimes triple damages or more. It is the one thing their legal department fears.</p>
      <p><strong>The Script:</strong> <em>"I have provided all requested documentation. Continued delay in processing this claim may be construed as acting in bad faith. I would hate to have to file a complaint regarding bad faith practices."</em></p>

      <h3>3. "Department of Insurance"</h3>
      <p><strong>When to use it:</strong> When you hit a brick wall and they refuse to budge.</p>
      <p><strong>Why it works:</strong> Insurance companies are regulated by the state. The State Department of Insurance (DOI) has the power to audit them, fine them, and revoke their licenses. A complaint to the DOI creates a permanent record that the insurer has to respond to legally.</p>
      <p><strong>The Script:</strong> <em>"If we cannot resolve this today, my next step will be to file a formal complaint with the [Your State] Department of Insurance and the State Attorney General’s office."</em></p>

      <h3>The "Escalation" Technique</h3>
      <p>Frontline customer service reps often don't have the authority to fix complex problems. They are judged on "call time"—how fast they can get you off the phone.</p>
      
      <p>If you aren't getting anywhere, use this line: <em>"I understand you may not have the authority to approve this. Please transfer me to a supervisor or a claims adjudicator who has the authority to resolve a bad faith complaint."</em></p>
      
      <p><strong>Remember:</strong> Be polite, but be lethal. You don't need to yell. You just need to use the right words.</p>
    `
  },
  "out-of-network-trap": {
    title: "The 'Out-of-Network' Trap Explained",
    date: "November 1, 2025",
    description: "Understand how surprise billing works and how the No Surprises Act protects you.",
    content: `
      <p>It is the nightmare scenario. You do everything right. You research the hospital. You check your insurance portal. You confirm that your surgeon is "In-Network." You go in for your surgery, recover, and go home.</p>
      
      <p>Three weeks later, the bill arrives. It’s for $3,500. The header says "Anesthesiology Services." And in big bold letters: <strong>OUT OF NETWORK</strong>.</p>
      
      <p>How is this possible? You went to an in-network hospital! How were you supposed to know the anesthesiologist—who you met for 30 seconds while you were being sedated—didn't work for the hospital?</p>
      
      <p>This is called "Surprise Billing," and it is one of the dirtiest tricks in the American healthcare system.</p>

      <h3>The "Drive-By" Doctor</h3>
      <p>Hospitals often outsource their specialists. The ER doctors, anesthesiologists, radiologists, and pathologists often work for private equity-backed staffing firms, not the hospital. These firms deliberately choose not to contract with insurance plans so they can bill patients the maximum possible rate.</p>
      
      <p>You are the hostage in their negotiation.</p>

      <h3>Good News: The No Surprises Act</h3>
      <p>In 2022, the federal government passed the <strong>No Surprises Act (NSA)</strong>. This law was a game-changer. It bans surprise bills for:</p>
      <ul>
        <li><strong>Emergency Services:</strong> Even if the ER is out-of-network, your insurance must cover it as if it were in-network.</li>
        <li><strong>Non-Emergency Services at In-Network Facilities:</strong> If you go to an in-network hospital, the "ancillary" providers (anesthesiologists, assistants, radiologists) cannot send you a surprise bill. They must accept the in-network rate.</li>
      </ul>

      <h3>The Loophole: Ground Ambulances</h3>
      <p>While the NSA protects you from air ambulances (helicopters), it shockingly <strong>does not cover ground ambulances</strong>. If you call 911 and the ambulance that shows up is out-of-network (which is common), you can still be billed thousands of dollars.</p>

      <h3>How to Fight a Surprise Bill Today</h3>
      <p>If you receive a bill that looks like a surprise balance bill, follow these steps:</p>
      
      <h4>1. Don't Pay It.</h4>
      <p>The billing systems often haven't caught up to the law. They might send the bill automatically. Paying it admits validity.</p>
      
      <h4>2. Check the Date and Location.</h4>
      <p>Did this happen at an ER or an in-network hospital? If yes, the No Surprises Act likely protects you.</p>
      
      <h4>3. Send the "Federal Protection" Letter.</h4>
      <p>Call the billing entity and say: <em>"This bill appears to be in violation of the federal No Surprises Act. I was at an in-network facility and did not consent to out-of-network care. You are required by law to bill this at the in-network rate. Please reissue the bill or I will file a complaint with CMS."</em></p>
      
      <p>If they refuse, you can file a complaint directly with the Centers for Medicare & Medicaid Services (CMS) at <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer">cms.gov/nosurprises</a>. The government takes these violations very seriously.</p>
    `
  },
  "how-to-appeal-denial": {
    title: "How to Appeal a Denial: A Step-by-Step Guide",
    date: "November 5, 2025",
    description: "A step-by-step guide to appealing insurance denials, from decoding reason codes to filing external reviews.",
    content: `
      <p>There is a sinking feeling in your stomach when you open a letter from your insurance company and see the word <strong>DENIED</strong>. It feels final. It feels like a judge banging a gavel.</p>
      
      <p>But here is the secret: A denial is not a verdict. It’s a negotiation.</p>
      
      <p>Insurance companies deny claims algorithmically. They use software to flag anything that looks expensive or unusual. They know that <strong>less than 0.2% of patients ever appeal a denial</strong>. By simply saying "no," they save billions of dollars every year because people like you just give up and pay.</p>
      
      <p>Don't be part of the 99.8%. Here is how to fight back and win.</p>

      <h3>Step 1: Decode the "Reason Code"</h3>
      <p>You cannot fight a denial if you don't know why it happened. Look at your Explanation of Benefits (EOB). There will be a two-letter or numeric code next to the denial. Look for the footnote explaining it.</p>
      <ul>
        <li><strong>"Not Medically Necessary":</strong> They think you didn't need the treatment. (Fight with medical records).</li>
        <li><strong>"Experimental/Investigational":</strong> They think the treatment is too new. (Fight with peer-reviewed studies).</li>
        <li><strong>"Prior Authorization Missing":</strong> Your doctor forgot to ask for permission first. (Fight by proving it was an emergency or administrative error).</li>
      </ul>

      <h3>Step 2: The "Peer-to-Peer" Request</h3>
      <p>Before you file a formal paperwork appeal, ask your doctor to schedule a "Peer-to-Peer" review. This is a phone call between your doctor and the insurance company's doctor.</p>
      <p>Often, the denial came from a nurse or an algorithm. When your doctor gets an actual Medical Director on the phone and explains the case, the denial is often overturned instantly. This is the fastest way to win.</p>

      <h3>Step 3: The Formal Appeal Letter</h3>
      <p>If the Peer-to-Peer fails, you must write a letter. Do not write a sob story. Insurance companies do not care about your feelings; they care about their contract.</p>
      
      <p>Use the <strong>IRAC Method</strong> (Issue, Rule, Analysis, Conclusion):</p>
      <ul>
        <li><strong>Issue:</strong> "You denied claim #12345 for an MRI."</li>
        <li><strong>Rule:</strong> "My policy document, on page 45, states that MRIs are covered when the patient presents with symptoms X and Y."</li>
        <li><strong>Analysis:</strong> "As shown in the attached medical records, I presented with symptoms X and Y. My doctor, Dr. Smith, has provided a letter of medical necessity confirming this."</li>
        <li><strong>Conclusion:</strong> "Therefore, you must overturn this denial and pay the claim."</li>
      </ul>

      <h3>Step 4: The External Review</h3>
      <p>If they deny your internal appeal (they usually do), you have a right to an <strong>External Review</strong>. This sends your case to a neutral third-party doctor who does not work for the insurance company.</p>
      <p><strong>Insurance companies lose about 50% of external reviews.</strong> They hate them because they have to pay for the review itself. Simply demanding an external review often forces them to settle.</p>
      
      <p>The system is designed to make you quit. The only way to lose is to stop fighting.</p>
    `
  },
  "what-is-cpt-code": {
    title: "What is a CPT Code? The Secret Language of Your Bill",
    date: "November 12, 2025",
    description: "Decode your medical bill by understanding CPT codes and identifying common scams like upcoding and unbundling.",
    content: `
      <p>Imagine going to a grocery store where the receipt doesn't say "Apples" or "Milk." Instead, it just has a string of 5-digit numbers. You have no idea if you paid for apples or for a flat-screen TV.</p>
      
      <p>That is exactly how medical billing works. The language of American healthcare is <strong>CPT (Current Procedural Terminology)</strong> codes. These 5-digit numbers, owned and maintained by the American Medical Association, determine exactly how much you pay.</p>
      
      <p>If you want to lower your bill, you have to learn to read the code.</p>

      <h3>The "Upcoding" Scam</h3>
      <p>The most common way hospitals inflate bills is "Upcoding." This is when they use a code for a more severe (and expensive) version of the service you actually received.</p>
      
      <p><strong>Example: The ER Visit Codes</strong></p>
      <ul>
        <li><strong>99281:</strong> Minor problem (nursing care only). Cost: ~$50.</li>
        <li><strong>99283:</strong> Moderate severity. Cost: ~$300.</li>
        <li><strong>99285:</strong> Life-threatening emergency / High severity. Cost: ~$1,500+.</li>
      </ul>
      
      <p>Hospitals notoriously abuse code <strong>99285</strong>. If you walked into the ER with a sprained ankle, waited 3 hours, saw a doctor for 5 minutes, and got an Ace bandage, that is a Level 2 or 3 visit. If they bill you for a 99285, they are claiming you had a life-threatening emergency requiring high-level decision making.</p>
      
      <p><strong>Action Step:</strong> Look at your bill. If you see 99285 and you didn't almost die, you are being upcoded.</p>

      <h3>The "Unbundling" Trick</h3>
      <p>Another common tactic is "Unbundling." This is like buying a burger and getting charged separately for the bun, the meat, the lettuce, and the grilling service.</p>
      
      <p>In surgery, there is often a "global code" that covers the incision, the procedure, and the closing stitches. Unscrupulous billers will break this apart:</p>
      <ul>
        <li>Code A: The incision.</li>
        <li>Code B: The procedure.</li>
        <li>Code C: The stitches.</li>
      </ul>
      <p>This can double or triple the cost. This is illegal under Medicare rules (called the NCCI edits), but private hospitals do it to patients all the time.</p>

      <h3>How to Decode Your Bill</h3>
      <p>You don't need a medical degree. You just need Google.</p>
      <ol>
        <li>Get your itemized bill.</li>
        <li>Type every 5-digit code into Google followed by "CPT code description."</li>
        <li>Read the description. Does it match what happened?</li>
        <li>If the code says "Surgical closure of wound > 5cm" and your cut was only 1cm, you have caught them in a lie.</li>
      </ol>
      
      <p>These codes are the evidence you need to demand a correction. When you call billing and say, <em>"You billed me for CPT 99285 but my medical records only support a 99283,"</em> they know the jig is up.</p>
    `
  },
  "5-minute-bill-audit": {
    title: "The 5-Minute Medical Bill Audit",
    date: "November 19, 2025",
    description: "Learn how to audit your medical bill in 5 minutes and spot common errors like duplicate charges and phantom services.",
    content: `
      <p>You probably check your restaurant receipt to make sure they didn't charge you for an extra appetizer. You check your credit card statement for fraud. But when a $5,000 medical bill arrives, most people just stare at it in horror and then assume it must be correct.</p>
      
      <p><strong>Statistically, it is not correct.</strong> Estimates suggest that up to 80% of medical bills contain errors. And those errors are rarely in your favor.</p>
      
      <p>You don't need to be a forensic accountant to find them. You just need 5 minutes, a highlighter, and this checklist.</p>

      <h3>The "Hotel Bill" Test</h3>
      <p>First, check the basics. Hospitals are chaotic places. Administrative errors happen constantly.</p>
      <ul>
        <li><strong>Dates of Service:</strong> Were you actually in the hospital on the days they billed you for? We often see "Room and Board" charges for the day <em>after</em> a patient was discharged. That’s a $2,000 mistake.</li>
        <li><strong>Duplicate Charges:</strong> Scan the list for identical numbers. Did they charge you twice for the same blood draw? Twice for the same Tylenol? This happens when a nurse clicks "submit" twice in the computer system.</li>
      </ul>

      <h3>The "Canceled Test" Ghost</h3>
      <p>Did a doctor order an X-ray, but then change their mind? Did they order a meal, but you were asleep so you didn't eat it?</p>
      <p>In the hospital system, the moment an order is placed, the charge is often generated. If the order is canceled later, the billing department doesn't always get the memo. You end up paying for tests, meds, and therapies you never received.</p>
      <p><strong>Action:</strong> If you see a charge for something you don't remember getting, challenge it. Ask them to show you the medical record proving it was administered.</p>

      <h3>The "OR Time" Clock</h3>
      <p>Operating Room time is billed by the minute, and it is incredibly expensive (often $100+ per minute). The clock is supposed to start when you enter the room and stop when you leave.</p>
      <p>Sometimes, the billing clock keeps running while the room is being cleaned after you leave. Or it starts while you are still in the hallway waiting.</p>
      <p>Check your anesthesia record. It tracks your time down to the minute. If the anesthesia record says the surgery lasted 45 minutes, but the hospital bill charges you for 90 minutes of OR time, you have proof of overbilling.</p>

      <h3>The Bottom Line</h3>
      <p>Auditing your bill is the highest hourly wage you will ever earn. Finding one error could save you $1,000 in five minutes. That is $12,000 an hour. Don't leave that money on the table.</p>
    `
  },
  "1974-law-erisa": {
    title: "The 1974 Law That Took Away Your Rights",
    date: "November 26, 2025",
    description: "Discover how a 1974 law called ERISA protects insurance companies from lawsuits and what you can do about it.",
    content: `
      <p>If a car manufacturer sells you a car with no brakes and you crash, you can sue them for millions. If a contractor builds a roof that collapses on you, you can sue them for negligence.</p>
      
      <p>But if an insurance company denies a life-saving cancer treatment to save money, and the patient dies? In many cases, you cannot sue them for a single penny of damages.</p>
      
      <p>How is this possible? The answer lies in a boring-sounding law from 1974 called <strong>ERISA (Employee Retirement Income Security Act)</strong>.</p>

      <h3>The Road to Hell was Paved with Good Intentions</h3>
      <p>In the 1960s, the Studebaker auto factory closed down, and thousands of workers lost their pensions overnight. Congress passed ERISA in 1974 to protect worker pensions from fraud and mismanagement.</p>
      
      <p>To make it easier for companies to operate across state lines, Congress included a "Preemption Clause." This said that ERISA overrides all state laws regarding employee benefits. At the time, nobody thought about health insurance. They were thinking about pensions.</p>

      <h3>The "Get Out of Jail Free" Card</h3>
      <p>In the 1980s and 90s, insurance companies realized they could use this Preemption Clause as a shield. Since most Americans get health insurance through their jobs, their plans fall under ERISA.</p>
      
      <p>Here is the catch: Under ERISA, the <em>only</em> legal remedy you have is the cost of the benefit itself.</p>
      
      <p><strong>The Scenario:</strong></p>
      <ul>
        <li>You need a $50,000 surgery.</li>
        <li>The insurance company denies it illegally to save money.</li>
        <li>You suffer for a year, lose your job, and your health deteriorates.</li>
        <li>You sue them and win.</li>
      </ul>
      
      <p><strong>The Verdict under ERISA:</strong> The court orders the insurance company to pay... $50,000. The cost of the surgery. Nothing for your pain, your lost wages, or your suffering.</p>
      
      <p>This creates a perverse incentive. If an insurance company denies 100 valid claims, 99 people might give up. One person might sue. The worst-case scenario for the insurer is that they just have to pay what they owed in the first place. There is no punishment. It is a crime with no consequence.</p>

      <h3>How to Fight the Shield</h3>
      <p>Knowing about ERISA is important because it changes your strategy. You cannot threaten a standard lawsuit. Instead, you must file complaints with the <strong>Department of Labor (DOL)</strong>, which oversees ERISA plans.</p>
      
      <p>The DOL has the power to audit plans and impose fines. While you might not get punitive damages, threatening a DOL audit is a headache that insurance companies want to avoid.</p>
      
      <p>When fighting a denial, copy the Department of Labor on your appeal letter. It signals that you know the game is rigged, and you know exactly who the referee is.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) {
    return <div className="container" style={{ padding: '4rem' }}>Post not found.</div>;
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Delay Deny Depose Team"
    },
    "description": post.description,
    "image": "https://delaydenydepose.com/assets/book-cover.jpg"
  };

  // Logic for "Read Next"
  const slugs = Object.keys(blogContent);
  const currentIndex = slugs.indexOf(slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextPost = blogContent[nextSlug];

  return (
    <div className="blog-post" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Helmet>
        <title>{post.title} | Delay Deny Depose</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://delaydenydepose.com/blog/${slug}`} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://delaydenydepose.com/blog/${slug}`} />
        <meta property="og:image" content="https://delaydenydepose.com/assets/book-cover.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Navigation */}
      <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/blog" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            &larr; Back to Blog
          </Link>
          <Link to="/checkout" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            Get the Book
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="container" style={{ maxWidth: '700px', padding: '4rem 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{ fontSize: '1rem', color: '#666', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {post.date}
          </div>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '2rem', fontFamily: 'Oswald, sans-serif', color: '#0a0a0a' }}>
            {post.title}
          </h1>

          <div
            style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Read Next Section */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
          <p style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
            Read Next
          </p>
          <Link to={`/blog/${nextSlug}`} style={{ textDecoration: 'none' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#0a0a0a', fontFamily: 'Oswald, sans-serif', marginBottom: '0.5rem' }}>
              {nextPost.title} &rarr;
            </h3>
          </Link>
        </div>

        {/* CTA Box */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          backgroundColor: '#f9f9f9',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            fontFamily: 'Oswald, sans-serif',
            color: '#0a0a0a'
          }}>
            Turn Knowledge Into Action
          </h3>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: '#555',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            You've seen the symptoms. Now read the full story of how the American healthcare system and learn exactly how we got here.
          </p>
          <Link to="/checkout" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Get the Book
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0a0a0a', color: 'white', padding: '3rem 0', textAlign: 'center', marginTop: 'auto' }}>
        <div className="container">
          <p>&copy; 2025 Delay - Deny - Depose. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
