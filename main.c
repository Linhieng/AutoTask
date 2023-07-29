#include <windows.h>
#include <shlobj.h>
#include <stdio.h>

int main () {
        system("chcp 65001 > nul");
        TCHAR startupPath[MAX_PATH];
        if (!SUCCEEDED(SHGetFolderPath(NULL, CSIDL_STARTUP, NULL, 0, startupPath))) {
                printf("无法定位shell:startup文件夹。\n");
        }
        char bat_file[256];
        char command[256];
        sprintf(bat_file, "backup.bat");
        sprintf(command, "copy \"%s\" \"%s\" ", bat_file, startupPath);
        printf("本程序将会将 %s 拷贝到启动文件目录(shell:startup)以确保开机自动执行脚本\n", bat_file);

        system(command);
        system("pause");

        return 0;
}
