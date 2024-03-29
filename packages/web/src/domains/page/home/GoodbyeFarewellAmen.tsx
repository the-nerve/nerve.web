import React from 'react';
import styled from 'styled-components';
import { breakpoints, grid, spacing } from '@web/ui/tokens';
import { BodyText, Container, Section } from '@web/ui/core';
import goodbyeImage from '@web/assets/goodbye-farewell-amen.jpg';

const StyledGoodbyeFarewellAmen = styled(Section)`
    padding: ${spacing.layout.xxl} 0 ${spacing.layout.l};

    .image {
        margin-bottom: ${spacing.layout.l};
    }
`;

export const GoodbyeFarewellAmen: React.FC = () => {
    return (
        <StyledGoodbyeFarewellAmen bgColor="default" className="">
            <Container maxWidth="s">
                <img
                    className="image"
                    src={goodbyeImage}
                    alt="goodbye dayton"
                    width={400}
                    height={400}
                />
                <BodyText size="m" color="light">
                    Hey friends, <br />
                    <br />
                    We are officially announcing that our time in Dayton is
                    coming to an end.
                    <br />
                    <br />
                    Over the last 8 years, we have produced 14 shows, including
                    2 collaborations with University of Dayton Theatre, Dance,
                    and Performance Technology Program We performed at the
                    Rosewood Arts Center, The Mathile Theater, and the PNC Arts
                    Annex. We rebranded from The Playground to The Nerve. We
                    were a part of the Impact program, and Community Spotlight
                    program through Dayton Live, and we collaborated on a very
                    successful variety show fundraiser with our friends,
                    TheatreLab Dayton. We’ve built an incredible Resident Artist
                    team that felt more like a family than an ensemble, and we
                    grew immensely as artists and people throughout this
                    life-changing experience.
                    <br />
                    <br />
                    The Nerve (The Playground) was built by two theatre kids and
                    self proclaimed dreamers who just wanted to tell universally
                    relatable stories in our own unique way.
                    <br />
                    <br />
                    Friend Art was our 14th and final production. It’s a play
                    about artists, and the perfect way for us to end our
                    journey. Because at the end of the day, we just wanted to
                    create art with our friends.
                    <br />
                    <br /> This company was never meant to last forever. It was
                    just one great adventure on our artistic journey. And now
                    the time has come for us to go on another adventure.
                    <br />
                    <br /> Dayton will always be home, but we have reached the
                    point where we need to explore our artistry elsewhere.
                    <br />
                    <br /> As Molly says in Friend Art, “What’s next can be
                    exciting!”
                    <br />
                    <br /> We are so incredibly proud of the company we have
                    built, the life-long friendships we’ve cultivated, and the
                    meaningful art we created here. If our stories touched even
                    one person along this journey, then we did our job.
                    <br />
                    <br /> Thank you so much to everyone who has supported us
                    over the years, and a special thank you to our friends &
                    sponsors, Knack Video + Photo, CreativeFuse, Indigo Life
                    Media, Dragonfly Editorial, Dayton Collaboratory, Jetpack,
                    Amy Askins & Chris Schairbaum, and Mike & Trudy Scheiding.
                    <br />
                    <br />
                    We are forever grateful to all of you for helping us realize
                    one of our dreams.
                    <br />
                    <br /> Goodbye Dayton. We will miss you.
                    <br />
                    <br />{' '}
                    <strong>Sincerely, Jenna Valyn and Christopher Hahn</strong>
                    <br />
                    <em>Artistic Directors at The Nerve Theatre</em>
                </BodyText>
            </Container>
        </StyledGoodbyeFarewellAmen>
    );
};
