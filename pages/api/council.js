const queryBuilder = ({ title, url, subtitle, image, text }) => {

    let content = {
        title: title,
        url: url,
        subtitle: subtitle,
        image: image,
        text: text
    }

    return JSON.stringify(content);
}

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    console.log(req.query);

    switch (req.query.name) {
        case "sexual-and-reproductive-health":
            res.end( queryBuilder({ 
                title: "Sexual and Reproductive Health and Rights", 
                url: req.query.name,
                subtitle: "STAND AGAINST STIGMAS.",
                image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_430/v1595749597/simsa/SRHR_LOGO.png",
                text: `Access to comprehensive sexual and reproductive health and rights is a basic human right. Yet, statistics show that contraceptions aren’t given access to, there’s a surge in death during pregnancy and childbirth, same sex relationships between consenting adults are still illegal in 71 countries globally. Some of the barriers to SRHR include discrimination, stigma, restrictive laws and policies and entrenched traditions. Progress remains slow despite the evidence that these rights can have a transformative effect, not only on individual women, but on families, communities and national economies. As the council for SRHR, we stand for these communities and advocate the much needed change.`
             }) )
            break;

        case "medical-education":
            res.end( queryBuilder({ 
                title: "Medical Education", 
                url: req.query.name,
                subtitle: "EDUCATE. INSPIRE. ASPIRE.",
                image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_430/v1595750795/simsa/MED_LOGO.png",
                text: `The council for Medical education is formed for medical students, by medical students. We often tend to get absorbed into the world of academics, leaving behind advocacy and collaborative skills and ethics, which are to be practiced collectively as a clinician. These skills alongside good academics play a pivotal role in sculpting a doctor. M.Ed provides a platform to look beyond academics to learn, educate, and inspire one another to consolidate these skills which form the foundation of our noble profession. It is also a great platform to get different perspectives from medical students all over South India while making new friends, which is always a benefit. So, join us in framing a better, bigger and brighter future for all of us, together.`
             }) )

        case "public-heath":
            res.end( queryBuilder({ 
                title: "Public Health", 
                url: req.query.name,
                subtitle: "BE THE CHANGE, BRING THE CHANGE",
                image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_430/v1595750798/simsa/PH_LOGO.png",
                text: `During the course of this pandemic, a crucial detail we have all learned is that our lives are not only in our hands, but also in the hands of others. We have seen instances where hundreds of people were affected by COVID-19 due to a lack of knowledge and awareness of symptoms. As medical students, we understand that public health is an intricate web of involving all people in the community and ergo, it begins with you, and grows with the support and discipline of each other. As advocates of public health, it is our goal to ensure that people are well aware of not only major medical illnesses but also mental health, environmental conditions, lifestyle and we strive to educate and raise awareness amongst communities on what they should and shouldn't do to achieve global health.`
             }) )
        
        case "human-rights-peace":
            res.end( queryBuilder({ 
                title: "Human Rights and Peace", 
                url: req.query.name,
                subtitle: "THEIR VOICES AREN'T ENOUGH, WE NEED YOURS",
                image: "https://res.cloudinary.com/poorna/image/upload/c_scale,q_auto:eco,w_430/v1595750796/simsa/HR_P_LOGO.png",
                text: `Human rights are the basic rights and freedoms that belong to every person in the world, from birth until death. They apply regardless of where you are from, what you believe in, or how you choose to live your life. They can never be taken away, although they can sometimes be restricted. These basic rights are based on shared values like dignity, fairness, equality, respect and independence. The council on Human rights and peace aims to provide a common platform for medicos to help people who have their human rights overlooked, and maintain peace which is one of our fundamental duties as Doctors. So, join us in shaping a peaceful and equal world where human rights are respected, for all of us.`
             }) )
            
        case "ethical-and-judicial":
            res.end( queryBuilder({ 
                title: "Ethical and Judicial Affairs", 
                url: req.query.name,
                subtitle: "THEIR VOICES AREN'T ENOUGH, WE NEED YOURS",
                image: "https://res.cloudinary.com/poorna/image/upload/q_auto:eco/v1595688354/Screenshot_from_2020-07-25_20-14-05.png",
                text: `The Council on Ethical and Judicial Affairs (CEJA) has 2 primary responsibilities. Through its policy development function, it maintains and updates the SIMSA Code of Medical Ethics. In its judicial function, it promotes adherence to the Code’s professional ethical standards. The Council on Ethical and Judicial Affairs (CEJA) ensures high standards of ethical professionalism through its disciplinary function. Under SIMSA's Constitution and Bylaws, CEJA is charged with evaluating the fitness of Probable Members for membership in the SIMSA. CEJA's judicial responsibilities include appellate jurisdiction over member appeals of ethics-related decisions made by Governing body ,specialty Interest groups and Advisory Board.
                `
             }) )

             case "longrange-planning-development":
                res.end( queryBuilder({ 
                    title: "Longrange Planning and Development", 
                    url: req.query.name,
                    subtitle: "THEIR VOICES AREN'T ENOUGH, WE NEED YOURS",
                    image: "https://res.cloudinary.com/poorna/image/upload/q_auto:eco/v1595688354/Screenshot_from_2020-07-25_20-14-05.png",
                    text: `The Council on Long Range Planning and Development (CLRPD) studies and evaluates the long-range objectives and policy development processes in order to make recommendations to the Board of Advisors on the strategic issues related to SIMSA's vision, goals and priorities.
                    The council's 5 main functions are: 
                    To study and make recommendations on the long-range objectives of the SIMSA
                    To advise the board of Advisors on strategies to reach the SIMSA's long-range objectives
                    To study anticipated changes in the environment of medicine and how they relate to the decision-making centers of the SIMSA
                    To identify and evaluate ways to enhance the SIMSA's policy development process, make policy positions readily accessible and provide support to the SIMSA's outreach, communications and advocacy activities
                    To evaluate the formation or change of any member group or section and make recommendations to the SIMSA Governing Body
                    `
                }) )

                case "constitution-bylaws-legislation":
                    res.end( queryBuilder({ 
                        title: "Constitution, Bylaws and Legislation", 
                        url: req.query.name,
                        subtitle: "THEIR VOICES AREN'T ENOUGH, WE NEED YOURS",
                        image: "https://res.cloudinary.com/poorna/image/upload/q_auto:eco/v1595688354/Screenshot_from_2020-07-25_20-14-05.png",
                        text: `The Council on Constitution, Bylaws and Legislation (CCBL) serves as a fact-finding and advisory committee on matters pertaining to SIMSA'S Constitution and Bylaws. The council recommends changes in the constitution and bylaws as directed by the Governing Body and advises the Board of Advisors in reviewing the rules, regulations and procedures of SIMSA sections.
                        The council reviews proposed legislation and recommends appropriate action in accordance with SIMSA policy. It also develops model state legislation, recommends changes in existing SIMSA policy when necessary to accomplish effective legislative goals, and recommends to the Board of Advisors new legislation and legislation to modify existing laws of interest to SIMSA.
                        The council also provides guidelines for Association bylaws with suggested provisions for inclusion in the constitution and bylaws for Councils and overall structure framework.
                        `
                    }) )

    }

}