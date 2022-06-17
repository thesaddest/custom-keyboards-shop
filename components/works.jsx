import React from "react";
import {
    Tile,
    TileBackground,
    TileContent,
    TileWrapper,
    WorkLeft,
    WorkRight,
} from "../utils/tile";
import Image from "next/image";
import { WorkBackground, WorkContainer } from "./work";

const Works = () => (
    <TileWrapper numOfPages={4}>
        <TileBackground>
            <WorkBackground />
        </TileBackground>
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL 680.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                                height={500}
                                width={500}
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
                                FL Q75.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                                width={500}
                                height={500}
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
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL CMK87.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                                width={500}
                                height={500}
                                src="https://product.hstatic.net/1000026716/product/61414_ban_phim_co_flesport_cmk87_ice_mint_coolmint_sw_kailh_box_0004_5_a5ce03d9b8634940b95f54346343d319.jpg"
                                alt="FL CMK87"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            ></Tile>
            <Tile
                page={3}
                renderContent={({ progress }) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                FL 980.
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image
                                width={500}
                                height={500}
                                src="https://cdn.shopify.com/s/files/1/0588/1108/9090/products/1_33c6769b-dd65-41a4-a471-a1ae88b18207_1024x1024@2x.jpg?v=1645008251"
                                alt="FL 980"
                            />
                        </WorkRight>
                    </WorkContainer>
                )}
            ></Tile>
        </TileContent>
    </TileWrapper>
);

export default Works;
