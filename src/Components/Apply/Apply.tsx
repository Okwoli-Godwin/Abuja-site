import * as React from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdfFile from "../Assets/uniabuja.pdf"
import styled from "styled-components";
import Header from "../Header";

const PdfReader: React.FC = () => {
	const getFilePluginInstance = getFilePlugin();
	const { Download } = getFilePluginInstance;

	return (
		<Container>
			<Header />
		<Worker workerUrl='https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js'>
			<Hold>
				<div
					style={{
						flex: 1,
						// overflow: "hidden",
					}}>
					<Viewer fileUrl={pdfFile} plugins={[getFilePluginInstance]} />
				</div>
				<Holder>
					<Download>
						{(props: RenderDownloadProps) => (
							<button
								style={{
									backgroundColor: "#357edd",
									border: "none",
									borderRadius: "4px",
									color: "#ffffff",
									cursor: "pointer",
									padding: "20px",
									marginTop: "50px",
									marginBottom: "70px"
								}}
								onClick={props.onClick}>
								Download
							</button>
						)}
					</Download>
				</Holder>
			</Hold>
		</Worker>
		</Container>
	);
};

export default PdfReader;
const Hold = styled.div`
	height: "750px";
	width: "400px";
	margin-left: "auto";
	margin-right: "auto";
`
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column

`
const Holder = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`