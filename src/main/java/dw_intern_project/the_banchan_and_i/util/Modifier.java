package dw_intern_project.the_banchan_and_i.util;

public class Modifier {
    public static String modifyInputText(String inputText, String bedrockImprovePrompt) {
        inputText = inputText.substring(0, inputText.length() - 1) + bedrockImprovePrompt;

        return inputText;
    }

    public static String removeBackTick(String responseText) {
        if (responseText.contains("`") || responseText.contains("json")) {
            responseText = responseText.replace("`", "").replace("json", "");
        }

        return responseText;
    }
    
	public static boolean checkChineseOrJapanese(String inputText) {
		String regex = "[\u4E00-\u9FFF\u3040-\u30FF]";
	    
		return inputText.matches(".*" + regex + ".*");
	}
}