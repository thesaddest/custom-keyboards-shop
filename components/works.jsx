import React from "react";
import {
    Tile,
    TileBackground,
    TileContent,
    TileWrapper,
    WorkLeft,
    WorkRight,
} from "../utils/tile";
import { WorkBackground, WorkContainer, WorkLink } from "./work";

const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We made</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL 680 customizable.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <img
                                width={840}
                                height={1620}
                                layout="responsive"
                                src="https://product.hstatic.net/1000026716/product/_ban_phim_co_flesport_fl680_sam_aqua_green_brown_sw_gateron_cap_0000_1_3400d8fd76ad4c1eb7e463ce39ef8e53.jpg"
                                alt="FL 680"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            ></Tile>
            <Tile
                page={1}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL Q75 smoother.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <img
                                width={840}
                                height={1620}
                                layout="responsive"
                                src="https://hanoicomputercdn.com/media/product/65247_ban_phim_co_khong_day_fl_esport_q75_blue_haze_3_mode_coolmint_sw_kailh_box_usbc_bluetooth_rgb_0001_2.jpg"
                                alt="FL Q75"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            ></Tile>
            <Tile
                page={2}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We implemented</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL CMK87 wireless.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <img
                                width={840}
                                height={1620}
                                layout="responsive"
                                src="https://product.hstatic.net/1000026716/product/61414_ban_phim_co_flesport_cmk87_ice_mint_coolmint_sw_kailh_box_0004_5_a5ce03d9b8634940b95f54346343d319.jpg"
                                alt="FL CMK87"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            ></Tile>
        </TileContent>
    </TileWrapper>
);

export default Works;
